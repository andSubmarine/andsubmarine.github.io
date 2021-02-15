---
title: Everything SSD - Part 2
description: 'A Network of Storage'
url: "./blob/pcie-topology.svg"
alt: "ssd overview"
published: "2021-02-22T00:00:00Z"
tags: ["ssd", "nvme", "pci", "os"]
---

In the last article of this series, I introduced some definitions for SSDs and explained how these storage devices fit into the memory hierarchy and how that works. In this article, I will continue exploring the idea that computer systems might be better understood as *a network of devices that are connected via various interconnects to various computing devices*. 

The idea is reinforced by the PCI Express point-to-point bus topology as seen in figure 2. The figure illustrates that PCIe compatible devices such as graphic cards and new generation SSD devices can communicate as endpoints through the root complex and various switches to other endpoints or with the CPU. Like in a network, communication occurs point-to-point with data packages as the medium. The size of the link between endpoints is typically defined by **lanes**. In each lane, data packages can flow both upstream and downstream simultaneously. This configuration is also sometimes called **dual-simplex**. The link width or number of lanes vary from 1 to 32 in increments of 2 which include: x1, x4, x8, x16 and x32. The number of lanes have a direct effect on the amount of possible maximum throughput and the latest version of PCIe - version 6.0 - even promises up to 126 GB/s for x16 lanes!

<img alt="PCIe Topology" src="./blob/pcie-topology.svg" class="img-fluid p-1">

**Figure 2**:*The PCI Express topology showing how various PCIe endpoint are connected to main memory and the CPU through a root complex and a variety of switches and backwards compatible bridges. The figure is based on a  2007 presentation by Ravi Budruk of the PCI-SIG [[3]](https://web.archive.org/web/20140715120034/http://www.pcisig.com/developers/main/training_materials/get_document?doc_id=4e00a39acaa5c5a8ee44ebb07baba982e5972c67)*

## CPU Evolution
Another important trend in the last decade that have a large impact on these aspects is the wide adaption of multi-socket multi-core central processing units (CPU). Back in the 00's, the industry determined that physical restrictions prevented the growth in processing speed that had been predicted by Moore's Law [[4]](https://en.wikipedia.org/wiki/Moore%27s_law). More precisely, the end of Dennard scaling [[5]](https://en.wikipedia.org/wiki/Dennard_scaling) has had the effect that although the amount of transitors in CPUs keeps growing there have not been a significant increase in performance due to power and heating limits. The solution was to instead of packing more power into a processing chip then to pack more chips into the same circuit. When building our own data systems we need to be aware of this trend to understand that the doubling of performance every other year on average is no longer true and that we need to try to get more out these systems by designing them to be more effective. Beside the change to multi-core CPUs then this has also meant a broader adoption of using other types of processing chips such as FPGA's [[6]](https://en.wikipedia.org/wiki/Field-programmable_gate_array) or GPU's for some workloads.

## Operating Systems & Storage Stacks
The OS or operating system itself have also went through changes in order to adapt to these trends. In the original design of the Linux kernel only synchronous POSIX calls was possible, but that changed with the introduction of libraries such as `libaio`in Linux version 2.6. Asynchronous writes are important since they can in parallel to other processes and doesn't block the CPU from doing other work. After the development of 

## Non-volatile Memory Express (NVMe)
In the last few sections, I have introduced some concepts that do not directly explain how SSDs work in order to provide a bit of an overview of the environment in which these operate. Before going deeper into how a SSD works, we should however take a look at the protocol that have led some of the most significant developments for SSDs: namely the Non-Volatile Memory Host Controller Interface Specification or NVMe for short. Why is NVMe important for SSDs? In contrast to previous specifications such as SATA, **the NVMe specification is designed to work on the PCIe topology**. The way that your old SSDs and HDDs interface with your system is likely SATA or SATA Express and have therefore been limited by a much lower maximum throughput. For comparison's sake, SATA revision 3.0 a maximum data transfer speed of 600 MB/s *which is about 210 times slower* than the maximum data transfer speed enabled by PCIe 4.0 using x16 lanes! But wait, what about SATA Express? Doesn't that also use the PCI Express interconnect? Well, yes and no - SATA Express do support using the PCIe topology, but acts as an adapter that makes some performance sacrifices in order to be compatible to both PCI and SATA connections. In general, adapting existing technologies to newer often requires compromise and in the sense of SATA Express that is realized by limits to possible performance.

In the next article in this series, we finally dive into detail of building blocks of the SSD itself - namely the flash chips - and explain why flash devices do not act as flash chips.
