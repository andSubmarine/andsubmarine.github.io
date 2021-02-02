---
title: Everything SSD
description: 'Understanding the internals of your SSD'
url: "./blob/ssd-device.png"
alt: "ssd overview"
published: "2021-02-08T00:00:00Z"
tags: ["ssd", "benchmarking", "data", "systems"]
---

What's the difference between an SSD and a HDD? Where can I use SSDs most effectively? How does an SSD behave? What building blocks make up an SSD and how do they work? In this article, I will go over some fundamentals regarding SSD storage devices to help you be informed. Let's begin with the acronym itself - what does SSD mean? **SSD stands for Solid State Drive** and the name itself is often used to differentiate it from other types of storage devices such as HDDs (Hard-Disk Drives). What's the difference beside the name? **Hard-disk drives stores data on magnetic rotational disks** while **Solid-state drives typically stores data in flash chips**. As you might imagine, the speed by which a physical disk can lookup and retrieve data by spinning its disk is *far slower than running a current through a silicon circuit*. That's why people and organisations are more frequently choosing SSDs over the traditional HDDs when building or upgrading their systems. I would like to note however that although SSDs are becoming more popular then many are still choosing HDDs due to the low prices per gigabyte [[1]](https://thessdguy.com/are-ssds-approaching-price-parity-with-hdds/).

# Memory hierarchy
SSD storage devices might store data in flash chips, but they are by no means the only type of devices that do this. You have likely used a USB flash drive at some point and that uses the same underlying flash chip technology as SSDs. Similarly, the memory of your data systems - the Random Access Memory (RAM) - also uses flash chips to store data while your system is running. To differentiate these usages, we should consider how these devices would be placed in the hierarchy of storage devices as seen on figure 1 below.

<img alt="Memory Hierarchy" src="./blob/storage-hierarchy.svg" class="img-fluid p-1">

**Figure 1**: *The memory hierarchy provides an overview of the categorizations of storage devices based on how close they are placed to the CPU which affects the access time (latency) to the device, but also has an effect of the capacity (i.e. how much is stored) of a given device. Note that the diagram has been simplified by not showing the internal hierarchies of the categorizations.*

Both SSDs and HDDs are considered secondary storage since they are not directly available to the CPU in the same way that the different levels of cache and RAM would be. Therefore the access times of secondary storage devices will always be lower than these types of primary storage devices. On the other hand, their capacity can be quite higher and thus enable the system to contain large quantities of data. You might be wondering now why the access times and storage capabilities of SSDs and RAM are so different if they all use flash chips of transitors? The answer to that question is that they don't use the same type of flash chips. Unlike the flash chips in SSDs, RAM is considered **volatile** which means that they only store data while the chips are powered. SSDs are therefore also sometimes called **non-volatile memory**. Modern RAM is also typically called dynamic RAM or DRAM to differentiate it from static RAM or SRAM which is typically used for the different levels of cache memory (L1/L2/L3 etc.). 

On the extreme end of high capacity and high latencies we find tertiary storage or "remote storage" that typically needs to be loaded into secondary storage before being used by the system. It could however be argued that there is little to no distinction between the layers of the storage hierarchy as new ideas and technologies have evolved. For instance, the new Intel Optane [[2]](https://www.intel.com/content/www/us/en/architecture-and-technology/intel-optane-technology.html) storage devices can function as an intermediary device between traditional primary and secondary storage since it can used for both purposes. Similarly, higher network speeds as well as the development of storage area networks have blurred the line between secondary and tertiary storage. 

# A Network of Storage
In fact, computer systems might be better understood as *a network of devices that are connected via various interconnects to various computing devices*. This idea is reinforced by the PCI Express point-to-point bus topology as seen in figure 2. The figure illustrates that PCIe compatible devices such as graphic cards and new generation SSD devices can communicate as endpoints through the root complex and various switches to other endpoints or with the CPU. Like in a network, communication occurs point-to-point with data packages as the medium. The size of the link between endpoints is typically defined by **lanes**. In each lane, data packages can flow both upstream and downstream simultaneously. This configuration is also sometimes called **dual-simplex**. The link width or number of lanes vary from 1 to 32 in increments of 2 which include: x1, x4, x8, x16 and x32. The number of lanes have a direct effect on the amount of possible maximum throughput and the latest version of PCIe - version 6.0 - even promises up to 126 GB/s for x16 lanes!

<img alt="PCIe Topology" src="./blob/pcie-topology.svg" class="img-fluid p-1">

**Figure 2**:*The PCI Express topology showing how various PCIe endpoint are connected to main memory and the CPU through a root complex and a variety of switches and backwards compatible bridges. The figure is based on a  2007 presentation by Ravi Budruk of the PCI-SIG [[3]](https://web.archive.org/web/20140715120034/http://www.pcisig.com/developers/main/training_materials/get_document?doc_id=4e00a39acaa5c5a8ee44ebb07baba982e5972c67)*

## CPU Evolution
Another important trend in the last decade that have a large impact on these aspects is the wide adaption of multi-socket multi-core central processing units (CPU). Back in the 00's, the industry determined that physical restrictions prevented the growth in processing speed that had been predicted by Moore's Law [[4]](https://en.wikipedia.org/wiki/Moore%27s_law). More precisely, the end of Dennard scaling [[5]](https://en.wikipedia.org/wiki/Dennard_scaling) has had the effect that although the amount of transitors in CPUs keeps growing there have not been a significant increase in performance due to power and heating limits. The solution was to instead of packing more power into a processing chip then to pack more chips into the same circuit. When building our own data systems we need to be aware of this trend to understand that the doubling of performance every other year on average is no longer true and that we need to try to get more out these systems by designing them to be more effective. Beside the change to multi-core CPUs then this has also meant a broader adoption of using other types of processing chips such as FPGA's [[6]](https://en.wikipedia.org/wiki/Field-programmable_gate_array) or GPU's for some workloads.

## Operating Systems & Storage Stacks
...

## Non-volatile Memory Express (NVMe)
In the last few sections, I have introduced some concepts that do not directly explain how SSDs work in order to provide a bit of an overview of the environment in which these operate. Before going deeper into how a SSD works, we should however take a look at the protocol that have led some of the most significant developments for SSDs: namely the Non-Volatile Memory Host Controller Interface Specification or NVMe for short. Why is NVMe important for SSDs? In contrast to previous specifications such as SATA, **the NVMe specification is designed to work on the PCIe topology**. The way that your old SSDs and HDDs interface with your system is likely SATA or SATA Express and have therefore been limited by a much lower maximum throughput. For comparison's sake, SATA revision 3.0 a maximum data transfer speed of 600 MB/s *which is about 210 times slower* than the maximum data transfer speed enabled by PCIe 4.0 using x16 lanes! But wait, what about SATA Express? Doesn't that also use the PCI Express interconnect?

# Flash Chips
...

## Building blocks
...

## Operation
...

# Flash device != flash chips
...

## What is the FTL?
...

# Conclusion
...