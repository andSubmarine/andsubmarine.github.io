---
title: Everything SSD
description: 'Understanding the internals of your SSD'
url: "./blob/ssd-device.png"
alt: "ssd overview"
published: "2021-02-08T00:00:00Z"
tags: ["ssd", "benchmarking", "data", "systems"]
---

What's the difference between an SSD and a HDD? Where can I use SSDs most effectively? How does an SSD behave? What building blocks make up an SSD and how do they work? In this article, I will go over some fundamentals regarding SSD storage devices to help you be informed. Let's begin with the acronym itself - what does SSD mean? **SSD stands for Solid State Drive** and the name itself is often used to differentiate it from other types of storage devices such as HDDs (Hard-Disk Drives). What's the difference beside the name? **Hard-disk drives stores data on magnetic rotational disks** while **Solid-state drives typically stores data in flash chips**. As you might imagine, the speed by which a physical disk can lookup and retrieve data by spinning its disk is *far slower than running a current through a silicon circuit*. That's why people and organisations are more frequently choosing SSDs over the traditional HDDs when building or upgrading their systems. I would like to note however that although SSDs are becoming more popular then many are still choosing HDDs due to the low prices per gigabyte [[1]](https://thessdguy.com/are-ssds-approaching-price-parity-with-hdds/).

# Storage hierarchy
SSD storage devices might store data in flash chips, but they are by no means the only type of devices that do this. You have likely used a USB flash drive at some point and that uses the same underlying flash chip technology as SSDs. Similarly, the memory of your data systems - the Random Access Memory (RAM) - also uses flash chips to store data while your system is running. To differentiate these usages, we should consider how these devices would be placed in the hierarchy of storage devices as seen on figure 1 below. 

<img alt="Storage Hierarchy" src="./blob/storage-hierarchy.svg" class="img-fluid p-1">

**Figure 1**: *The storage hierarchy provides an overview of the categorizations of storage devices based on how close they are placed to the CPU which affects the access time (latency) to the device, but also has an effect of the capacity (i.e. how much is stored) of a given device. Note that the diagram has been simplified by not showing the internal hierarchies of the categorizations.*

Both SSDs and HDDs are considered secondary storage since they are not directly available to the CPU in the same way that the different levels of cache and RAM would be. Therefore the access times of secondary storage devices will always be lower than these types of primary storage devices. On the other hand, their capacity can be quite higher and thus enable the system to contain large quantities of data. You might be wondering now why the access times and storage capabilities of SSDs and RAM are so different if they all use flash chips of transitors? The answer to that question is that they don't use the same type of flash chips. Unlike the flash chips in SSDs, RAM is considered **volatile** which means that they only store data while the chips are powered. SSDs are therefore also sometimes called **non-volatile memory**. Modern RAM is also typically called dynamic RAM or DRAM to differentiate it from static RAM or SRAM which is typically used for the different levels of cache memory (L1/L2/L3 etc.). 

On the extreme end of high capacity and high latencies we find tertiary storage or "remote storage" that typically needs to be loaded into secondary storage before being used by the system. It could however be argued that there is little to no distinction between the layers of the storage hierarchy as new ideas and technologies have evolved. For instance, the new Intel Optane [[2]](https://www.intel.com/content/www/us/en/architecture-and-technology/intel-optane-technology.html) storage devices can function as an intermediary device between traditional primary and secondary storage since it can used for both purposes. Similarly, higher network speeds as well as the development of storage area networks have blurred the line between secondary and tertiary storage. 

*In fact, people have started to believe that the storage hierarchy can be better understood as a network of storage devices that are connected via different interconnects to various computing devices*. 

# A Network of Storage
...

## PCIe and NVMe
... 

## OS Storage Stacks
...

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