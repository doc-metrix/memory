Memory
===

> A specification for memory performance metrics.


## Metrics

#### [mem.active](http://linux.die.net/man/5/proc)

The amount of memory that has been used more recently and usually will not be reclaimed unless absolute necessary.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.activeAnon](http://linux.die.net/man/5/proc)

The amount of active memory that is not mapped to the filesystem and exists in an anonymous region in memory, such as a process' stack or heap space.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.activeFile](http://linux.die.net/man/5/proc)

The amount of active memory that is mapped to the filesystem.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.anonHugePages](http://linux.die.net/man/5/proc)

The number of pages larger than the system's default page size. These pages are not backed to the filsystem and have been mapped to user processes.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.anonPages](http://linux.die.net/man/5/proc)

The number of pages that are not backed to the filesystem and have been mapped to user processes.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.bounce](http://linux.die.net/man/5/proc)

The amount of RAM that is used as buffers for data streams between memory and devices (such as SCSI and PCI devices).

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.buffers](http://linux.die.net/man/5/proc)

The amount of memory used as buffers for storing filesystem metadata when disks are accessed. For example, when a file is accessed, the content of the file is stored in the page cache while the file metadata, such as file permissions, are stored in buffers.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.cached](http://linux.die.net/man/5/proc)

The amount of memory used for the page cache to store the files when reading from or writing to disk. Does not include [mem.swapCached](#mem.swapCached).

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.commitLimit](http://linux.die.net/man/5/proc)

The total amount of memory currently available to be allocated on the system based on the `overcommit_ratio` (`vm.overcommit_ratio` or `/proc/sys/vm/overcommit_ratio`). The metric is calculated by `(total usable RAM * overcommit ratio) + the total swap disk size`. This limit is only adhered to if strict overcommit accounting is enabled (mode 2 in `vm.overcommit_memory` or `/proc/sys/vm/overcommit_memory`). For example, on a system with 1GB of RAM and 7GB of swap with a `overcommit_ratio` of 30, the `CommitLimit` is 7.3GB.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
`null` | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.commitedAS](http://linux.die.net/man/5/proc)

The amount of memory presently allocated to processes on the system, and henceforth the maximum amount of memory that these processes may use. With strict overcommit enabled on the system (mode 2 in `vm.overcommit_memory` or `/proc/sys/vm/overcommit_memory`), allocations which would exceed the `CommitLimit` will not be permitted. This is useful if one needs to guarantee that processes will not fail due to lack of memory once that memory has been successfully allocated.

Note: the maximum value is the `CommitLimit` (if strict overcommit accounting is enabled, which is mode 2 in 'vm.overcommit_memory' or '/proc/sys/vm/overcommit_memory').

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.directMap1G](http://wiki.fcctt.org/index.php?title=FC39Understanding_Virtual_Memory_Statistics_in_/proc/meminfo/en)

The amount of RAM that is mapped using a 1GB page size.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)



#### [mem.directMap2M](http://wiki.fcctt.org/index.php?title=FC39Understanding_Virtual_Memory_Statistics_in_/proc/meminfo/en)

The amount of RAM that is mapped using a 2MB page size.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)



#### [mem.directMap4K](http://wiki.fcctt.org/index.php?title=FC39Understanding_Virtual_Memory_Statistics_in_/proc/meminfo/en)

The amount of RAM that is mapped using a 4KB page size.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.dirty](http://linux.die.net/man/5/proc)

The number of pages in RAM that differ from their corresponding data on disk (for example, as a result of asychronous disk write). A large number of dirty pages means many disk writes have not completed.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.hardwareCorrupted](http://linux.die.net/man/5/proc)

The amount of memory that has been corrupted.

Note: the Linux kernel must be configured with `CONFIG_MEMORY_FAILIRE` to show this metric.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.highFree](http://linux.die.net/man/5/proc)

The amount of free highmem RAM that is above approximately 860MB used for user processes or the page cache. The kernel must use tricks to access this memory, making it slower to access than lowmem.

Note: Starting with Linux `2.6.19`, the kernel must be configured with `CONFIG_HIGHMEM` to show this metric. The maximum value is the total amount of high memory.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.highTotal](http://linux.die.net/man/5/proc)

The total amount of highmem RAM that is above approximately 860MB used for user processes or the page cache. The kernel must use tricks to access this memory, making it slower to access than lowmem.

Note: Starting with Linux `2.6.19`, the kernel must be configured with `CONFIG_HIGHMEM` to show this metric. The maximum value is the total amount of usable RAM (total RAM minus a few reserved bits and the kernel binary code) minus the total amount of low memory.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.hugePagesFree](http://linux.die.net/man/5/proc)

The number of huge pages in the pool of huge pages that are not yet allocated.

Note: The Linux kernel must be configured with `CONFIG_HUGETLB_PAGE` to show this metric. The maximum value is the total amount of huge pages.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [hugepages](https://github.com/doc-metrix/units#hugepages) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.hugePagesRsvd](http://linux.die.net/man/5/proc)

The number of huge pages for which a commitment to allocate from the pool of huge pages has been made, but no allocation has yet been made. These reserved huge pages guarantee that a process will be able to allocate a huge page from the pool at fault time (when the process accesses the memory).

Note: The Linux kernel must be configured with `CONFIG_HUGETLB_PAGE` to show this metric. The maximum value is the total amount of huge pages.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [hugepages](https://github.com/doc-metrix/units#hugepages) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.hugePagesSurp](https://www.kernel.org/doc/Documentation/vm/hugetlbpage.txt)

The number of huge pages above the current number of 'persistent' huge pages in the kernel's pool of huge pages.

Note: The Linux kernel must be configured with `CONFIG_HUGETLB_PAGE` to show this metric. The maximum value is set by `/proc/sys/vm/nr_overcommit_hugepages`.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [hugepages](https://github.com/doc-metrix/units#hugepages) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.hugePagesTotal](http://linux.die.net/man/5/proc)

The total number of huge pages in the pool of huge pages.

Note: The Linux kernel must be configured with `CONFIG_HUGETLB_PAGE` to show this metric.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [hugepages](https://github.com/doc-metrix/units#hugepages) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.hugePageSize](https://www.kernel.org/doc/Documentation/vm/hugetlbpage.txt)

The size of huge pages.

Note: The Linux kernel must be configured with `CONFIG_HUGETLB_PAGE` to show this metric.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.inactive](http://linux.die.net/man/5/proc)

The amount of memory which has been less recently used. It is more eligible to be reclaimed for other purposes.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)


#### [mem.inactiveAnon](http://linux.die.net/man/5/proc)

The amount of inactive memory that is not mapped to the filesystem and exists in an anonymous region in memory such as a process' stack or heap space. Inactive memory is memory which has been less recently used and more eligible to be reclaimed for other purposes.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `null` | [KB](https://github.com/doc-metrix/units#kb) | raw | [integer](https://github.com/doc-metrix/data-types#integer)



===
## Contributing

To contribute to this specification, see the contributing [guide](https://github.com/doc-metrix/contributing). Any updates to the specification should be tagged.

``` bash
$ git tag -a <major.minor.patch> -m "[UPDATE] version."
$ git push origin <major.minor.patch>
```

Use [semantic versioning](http://semver.org/) (semvar) for communicating versions.

*	Any new metrics should be communicated as `minor` updates.
*	Any corrections/value modifications should be `patches`.
* 	Any specification restructuring (changing field names, removing fields, etc) should be communicated as a `major` update.


===
## Usage

The specification is stored as [JSON](http://json.org/), a lightweight data-interchange format. Many languages provide JSON support: [JavaScript](http://www.json.org/js.html), [Python](https://docs.python.org/2/library/json.html), [Go](http://golang.org/pkg/encoding/json/), [PHP](http://php.net/manual/en/book.json.php), [Java](http://json.org/java/), [Haskell](http://hackage.haskell.org/package/json), and [others](http://json.org/).

You are free to use the JSON specification, as is. Simply copy the file and use accordingly.

For those using package managers to manage dependencies, we provide package manager support, as outlined below.


### Bower

The specification is registered as a [Bower](http://bower.io) package. Bower provides a straightforward means for managing dependencies.

In order to use Bower, you must first install [Node.js](http://nodejs.org/) and [Git](http://git-scm.com/book/en/Getting-Started-Installing-Git). Once the prerequisites are installed,

``` bash
$ npm install -g bower
```

To [install](http://bower.io/docs/api/#install) the latest specification,

``` bash
$ bower install doc-metrix-memory
```

Bower will place the specification in a `bower_components/` directory within the current working directory.

To [update](http://bower.io/docs/api/#update) to the latest specification,

``` bash
$ bower update doc-metrix-memory
```


### Utilities

List of utitlies using this specification:

*	[Node.js](https://github.com/doc-metrix/memory-node)


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. NodePrime.

