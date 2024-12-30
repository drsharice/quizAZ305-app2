const questions = [
    {
      questionText: 'Which of these are Azure services?',
      type: 'multiple',
      answerOptions: [
        { answerText: 'Azure Functions', isCorrect: true },
        { answerText: 'Azure SQL Database', isCorrect: true },
        { answerText: 'Azure Machines', isCorrect: false },
      ],
    },
    {
      questionText: 'What is Azure?',
      type: 'single',
      answerOptions: [
        { answerText: 'A cloud platform', isCorrect: true },
        { answerText: 'A programming language', isCorrect: false },
        { answerText: 'A database', isCorrect: false },
      ],
    },
    {
        questionText: 'What does Azure offer?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Limitless innovation', isCorrect: true },
          { answerText: 'A platform for traditional hosting', isCorrect: false },
          { answerText: 'Security-focused AI solutions', isCorrect: true },
          { answerText: 'Low-quality analytics tools', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Azure primarily used for?',
        type: 'single',
        answerOptions: [
          { answerText: 'Running on-premises applications', isCorrect: false },
          { answerText: 'Building intelligent apps and solutions', isCorrect: true },
        ],
      },
      {
        questionText: 'What can you do with Azure AI services?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Build intelligent bots', isCorrect: true },
          { answerText: 'Run mixed reality applications', isCorrect: true },
          { answerText: 'Host static websites only', isCorrect: false },
          { answerText: 'Create dynamic data storage solutions', isCorrect: true },
        ],
      },
      {
        questionText: 'Why should you trust Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'Because it is built on trusted technology dedicated to security and responsibility.', isCorrect: true },
          { answerText: 'Because it is cheaper than any other cloud solution.', isCorrect: false },
        ],
      },
      {
        questionText: 'What do you need to create and use Azure services?',
        type: 'single',
        answerOptions: [
          { answerText: 'An Azure subscription', isCorrect: true },
          { answerText: 'A Microsoft Office license', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the Learn sandbox?',
        type: 'single',
        answerOptions: [
          { answerText: 'An environment for temporary Azure subscriptions during Learn modules', isCorrect: true },
          { answerText: 'A dedicated Azure environment for businesses', isCorrect: false },
        ],
      },
      {
        questionText: 'What is included in the Azure free account?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Free access to popular Azure products for 12 months', isCorrect: true },
          { answerText: 'A credit to use for the first 30 days', isCorrect: true },
          { answerText: 'Access to more than 25 products that are always free', isCorrect: true },
          { answerText: 'Unlimited free usage of all Azure services', isCorrect: false },
        ],
      },
      {
        questionText: 'What do you need to sign up for an Azure free account?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'A phone number', isCorrect: true },
          { answerText: 'A credit card for identity verification', isCorrect: true },
          { answerText: 'A Microsoft or GitHub account', isCorrect: true },
          { answerText: 'An Azure certification', isCorrect: false },
        ],
      },
      {
        questionText: 'What is included in the Azure free student account?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Free access to certain Azure services for 12 months', isCorrect: true },
          { answerText: '$100 credit for the first 12 months', isCorrect: true },
          { answerText: 'Free access to certain software developer tools', isCorrect: true },
          { answerText: 'A free credit card', isCorrect: false },
        ],
      },
      {
        questionText: 'How can you purchase Azure access?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Directly from Microsoft', isCorrect: true },
          { answerText: 'Through a Microsoft representative', isCorrect: true },
          { answerText: 'Through a Microsoft partner', isCorrect: true },
          { answerText: 'From a third-party auction site', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the core architectural components of Azure?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Physical infrastructure', isCorrect: true },
          { answerText: 'Management components', isCorrect: true },
          { answerText: 'Region-specific pricing', isCorrect: false },
          { answerText: 'Availability features', isCorrect: true },
        ],
      },
      {
        questionText: 'What is the minimum number of availability zones in an Azure region that supports them?',
        type: 'single',
        answerOptions: [
          { answerText: 'Two', isCorrect: false },
          { answerText: 'Three', isCorrect: true },
          { answerText: 'Five', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the primary uses of availability zones?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Running mission-critical applications', isCorrect: true },
          { answerText: 'Building high availability into app architecture', isCorrect: true },
          { answerText: 'Replacing all VMs with managed disks', isCorrect: false },
          { answerText: 'Isolating resources from regional disasters', isCorrect: true },
        ],
      },
      {
        questionText: 'Which of the following are categories of Azure services that support availability zones?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Zonal services', isCorrect: true },
          { answerText: 'Zone-redundant services', isCorrect: true },
          { answerText: 'Non-regional services', isCorrect: true },
          { answerText: 'Global redundant services', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a region pair in Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'Two Azure regions directly connected within the same geography', isCorrect: true },
          { answerText: 'A backup for global services', isCorrect: false },
          { answerText: 'A secondary region for sovereign data compliance', isCorrect: false },
        ],
      },
      {
        questionText: 'What are sovereign regions in Azure used for?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Compliance and legal purposes', isCorrect: true },
          { answerText: 'U.S. government agencies', isCorrect: true },
          { answerText: 'Accessing all Azure services worldwide', isCorrect: false },
          { answerText: 'Partnership-based data services in specific geographies', isCorrect: true },
        ],
      },
      {
        questionText: 'What defines an Azure region?',
        type: 'single',
        answerOptions: [
          { answerText: 'A geographical area with at least one datacenter', isCorrect: true },
          { answerText: 'A single datacenter in any location', isCorrect: false },
          { answerText: 'A specific pricing tier', isCorrect: false },
        ],
      },
      {
        questionText: 'What connects availability zones within a region?',
        type: 'single',
        answerOptions: [
          { answerText: 'High-speed, private fiber-optic networks', isCorrect: true },
          { answerText: 'Public internet connections', isCorrect: false },
          { answerText: 'Satellite links', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the basic building block of Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'A resource', isCorrect: true },
          { answerText: 'A subscription', isCorrect: false },
          { answerText: 'A resource group', isCorrect: false },
        ],
      },
      {
        questionText: 'What is true about Azure resource groups?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Resources can only belong to one resource group at a time', isCorrect: true },
          { answerText: 'Resource groups can be nested within each other', isCorrect: false },
          { answerText: 'Deleting a resource group deletes all resources within it', isCorrect: true },
          { answerText: 'Resource groups are automatically assigned access control policies', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the two types of subscription boundaries in Azure?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Billing boundary', isCorrect: true },
          { answerText: 'Access control boundary', isCorrect: true },
          { answerText: 'Compliance boundary', isCorrect: false },
          { answerText: 'Resource boundary', isCorrect: false },
        ],
      },
      {
        questionText: 'What can Azure subscriptions be used for?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Configuring different billing models', isCorrect: true },
          { answerText: 'Applying access-management policies', isCorrect: true },
          { answerText: 'Organizing resources based on access needs', isCorrect: true },
          { answerText: 'Eliminating the need for resource groups', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of Azure management groups?',
        type: 'single',
        answerOptions: [
          { answerText: 'To provide a level of scope above subscriptions for governance', isCorrect: true },
          { answerText: 'To replace resource groups for resource organization', isCorrect: false },
          { answerText: 'To manage billing across multiple geographies', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following are true about Azure management groups?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'They can be nested', isCorrect: true },
          { answerText: 'They support up to six levels of depth in a tree structure', isCorrect: true },
          { answerText: 'They can have multiple parents', isCorrect: false },
          { answerText: 'They automatically manage billing for subscriptions', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the maximum number of management groups supported in a single directory?',
        type: 'single',
        answerOptions: [
          { answerText: '10,000', isCorrect: true },
          { answerText: '1,000', isCorrect: false },
          { answerText: '100', isCorrect: false },
        ],
      },
      {
        questionText: 'Why might you create additional Azure subscriptions?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'To separate environments like development and production', isCorrect: true },
          { answerText: 'To manage costs based on workloads', isCorrect: true },
          { answerText: 'To bypass the need for resource groups', isCorrect: false },
          { answerText: 'To reflect different organizational structures', isCorrect: true },
        ],
      },
      {
        questionText: 'What is a storage account in Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'A unique namespace for Azure Storage data accessible globally over HTTP or HTTPS', isCorrect: true },
          { answerText: 'A type of virtual machine in Azure', isCorrect: false },
          { answerText: 'A redundant database for Azure services', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following are redundancy options available for Azure storage accounts?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Locally redundant storage (LRS)', isCorrect: true },
          { answerText: 'Geo-redundant storage (GRS)', isCorrect: true },
          { answerText: 'Read-access geo-redundant storage (RA-GRS)', isCorrect: true },
          { answerText: 'Premium geo-redundant storage (PGRS)', isCorrect: false },
        ],
      },
      {
        questionText: 'What type of storage account is recommended for most Azure Storage scenarios?',
        type: 'single',
        answerOptions: [
          { answerText: 'Standard general-purpose v2', isCorrect: true },
          { answerText: 'Premium block blobs', isCorrect: false },
          { answerText: 'Premium page blobs', isCorrect: false },
        ],
      },
      {
        questionText: 'Which storage account type is suitable for high transaction rates or low storage latency?',
        type: 'single',
        answerOptions: [
          { answerText: 'Premium block blobs', isCorrect: true },
          { answerText: 'Standard general-purpose v2', isCorrect: false },
          { answerText: 'Premium page blobs', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the supported redundancy options for Premium file shares in Azure?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Locally redundant storage (LRS)', isCorrect: true },
          { answerText: 'Zone-redundant storage (ZRS)', isCorrect: true },
          { answerText: 'Geo-redundant storage (GRS)', isCorrect: false },
          { answerText: 'Read-access geo-redundant storage (RA-GRS)', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the naming rules for an Azure storage account?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Must be between 3 and 24 characters in length', isCorrect: true },
          { answerText: 'May contain numbers and lowercase letters only', isCorrect: true },
          { answerText: 'Must include at least one uppercase letter', isCorrect: false },
          { answerText: 'Must be unique within Azure', isCorrect: true },
        ],
      },
      {
        questionText: 'What is the endpoint format for Azure Blob Storage?',
        type: 'single',
        answerOptions: [
          { answerText: 'https://<storage-account-name>.blob.core.windows.net', isCorrect: true },
          { answerText: 'https://<storage-account-name>.file.core.windows.net', isCorrect: false },
          { answerText: 'https://<storage-account-name>.queue.core.windows.net', isCorrect: false },
        ],
      },
      {
        questionText: 'What storage account type supports Server Message Block (SMB) and NFS file shares?',
        type: 'single',
        answerOptions: [
          { answerText: 'Premium file shares', isCorrect: true },
          { answerText: 'Standard general-purpose v2', isCorrect: false },
          { answerText: 'Premium page blobs', isCorrect: false },
        ],
      },
      {
        questionText: 'What does redundancy in Azure Storage ensure?',
        type: 'single',
        answerOptions: [
          { answerText: 'Data is protected from planned and unplanned events', isCorrect: true },
          { answerText: 'Data is only stored in a single location', isCorrect: false },
          { answerText: 'Data is always replicated across all Azure regions', isCorrect: false },
        ],
      },
      {
        questionText: 'Which redundancy option is the lowest-cost and offers the least durability?',
        type: 'single',
        answerOptions: [
          { answerText: 'Locally redundant storage (LRS)', isCorrect: true },
          { answerText: 'Geo-redundant storage (GRS)', isCorrect: false },
          { answerText: 'Zone-redundant storage (ZRS)', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the durability level of Zone-Redundant Storage (ZRS)?',
        type: 'single',
        answerOptions: [
          { answerText: 'At least 12 nines (99.9999999999%) over a year', isCorrect: true },
          { answerText: 'At least 16 nines (99.99999999999999%) over a year', isCorrect: false },
          { answerText: 'At least 11 nines (99.999999999%) over a year', isCorrect: false },
        ],
      },
      {
        questionText: 'What does Geo-Zone-Redundant Storage (GZRS) combine?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'High availability across availability zones', isCorrect: true },
          { answerText: 'Protection from regional outages via geo-replication', isCorrect: true },
          { answerText: 'Data replication across all Azure regions', isCorrect: false },
          { answerText: 'Only read access in the secondary region', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of a secondary region in Azure Storage redundancy?',
        type: 'single',
        answerOptions: [
          { answerText: 'To provide durability in case of a catastrophic failure in the primary region', isCorrect: true },
          { answerText: 'To eliminate the need for backups', isCorrect: false },
          { answerText: 'To replicate data synchronously across all regions', isCorrect: false },
        ],
      },
      {
        questionText: 'What is true about read-access geo-redundant storage (RA-GRS)?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Data in the secondary region is always available for reading', isCorrect: true },
          { answerText: 'Data replication to the secondary region is synchronous', isCorrect: false },
          { answerText: 'RPO indicates the point in time to which data can be recovered', isCorrect: true },
          { answerText: 'Primary region data is never lost', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the recovery point objective (RPO) in Azure Storage?',
        type: 'single',
        answerOptions: [
          { answerText: 'The point in time to which data can be recovered in the secondary region', isCorrect: true },
          { answerText: 'The time it takes to failover to the secondary region', isCorrect: false },
          { answerText: 'The durability rating of the primary region data', isCorrect: false },
        ],
      },
      {
        questionText: 'What does Geo-Redundant Storage (GRS) provide?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Replication within a single physical location in the primary region using LRS', isCorrect: true },
          { answerText: 'Asynchronous replication to a single physical location in the secondary region using LRS', isCorrect: true },
          { answerText: 'Synchronous replication across all Azure regions', isCorrect: false },
          { answerText: 'Read and write access in the secondary region by default', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Azure Blob storage used for?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Serving images or documents directly to a browser', isCorrect: true },
          { answerText: 'Streaming video and audio', isCorrect: true },
          { answerText: 'Hosting virtual machines', isCorrect: false },
          { answerText: 'Storing data for analysis by an on-premises or Azure-hosted service', isCorrect: true },
        ],
      },
      {
        questionText: 'Which storage tier is optimized for frequently accessed data?',
        type: 'single',
        answerOptions: [
          { answerText: 'Hot access tier', isCorrect: true },
          { answerText: 'Cool access tier', isCorrect: false },
          { answerText: 'Archive access tier', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of Azure Files?',
        type: 'single',
        answerOptions: [
          { answerText: 'To provide managed file shares in the cloud', isCorrect: true },
          { answerText: 'To store structured, non-relational data', isCorrect: false },
          { answerText: 'To manage block-level storage volumes', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following are true about Azure Queue storage?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'It is used for storing large numbers of messages', isCorrect: true },
          { answerText: 'It can handle messages up to 64 KB in size', isCorrect: true },
          { answerText: 'It requires synchronous processing of messages', isCorrect: false },
          { answerText: 'It can be combined with Azure Functions for message-triggered actions', isCorrect: true },
        ],
      },
      {
        questionText: 'What type of data is stored in Azure Table storage?',
        type: 'single',
        answerOptions: [
          { answerText: 'Structured, non-relational data', isCorrect: true },
          { answerText: 'Unstructured binary data', isCorrect: false },
          { answerText: 'Managed file shares', isCorrect: false },
        ],
      },
      {
        questionText: 'Which storage tier is optimized for data rarely accessed and stored for at least 180 days?',
        type: 'single',
        answerOptions: [
          { answerText: 'Archive access tier', isCorrect: true },
          { answerText: 'Cool access tier', isCorrect: false },
          { answerText: 'Hot access tier', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the benefits of Azure Disk storage?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Greater resiliency and availability than physical disks', isCorrect: true },
          { answerText: 'Ability to host virtual machines', isCorrect: true },
          { answerText: 'Fully managed by Azure', isCorrect: true },
          { answerText: 'Supports object-level storage', isCorrect: false },
        ],
      },
      {
        questionText: 'Which protocols are supported by Azure Files file shares?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Server Message Block (SMB)', isCorrect: true },
          { answerText: 'Network File System (NFS)', isCorrect: true },
          { answerText: 'File Transfer Protocol (FTP)', isCorrect: false },
          { answerText: 'Hypertext Transfer Protocol (HTTP)', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Azure Migrate?',
        type: 'single',
        answerOptions: [
          { answerText: 'A service to manage the assessment and migration of on-premises datacenters to Azure', isCorrect: true },
          { answerText: 'A tool to transfer small amounts of data to Azure', isCorrect: false },
          { answerText: 'A physical migration service for offline data transfer', isCorrect: false },
        ],
      },
      {
        questionText: 'Which tools are included in the Azure Migrate hub?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Azure Migrate: Discovery and assessment', isCorrect: true },
          { answerText: 'Azure Migrate: Server Migration', isCorrect: true },
          { answerText: 'Azure Data Box', isCorrect: false },
          { answerText: 'Azure App Service migration assistant', isCorrect: true },
        ],
      },
      {
        questionText: 'What does the Data Migration Assistant do?',
        type: 'single',
        answerOptions: [
          { answerText: 'Assesses SQL Servers for migration', isCorrect: true },
          { answerText: 'Migrates SQL Servers to Azure', isCorrect: false },
          { answerText: 'Transfers large amounts of data using a physical device', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the Azure Data Box used for?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'One-time migrations of large data sizes', isCorrect: true },
          { answerText: 'Periodic uploads of large data', isCorrect: true },
          { answerText: 'Real-time migration of applications', isCorrect: false },
          { answerText: 'Bulk data transfers to Azure', isCorrect: true },
        ],
      },
      {
        questionText: 'What is the maximum usable storage capacity of the Azure Data Box device?',
        type: 'single',
        answerOptions: [
          { answerText: '80 terabytes', isCorrect: true },
          { answerText: '100 terabytes', isCorrect: false },
          { answerText: '40 terabytes', isCorrect: false },
        ],
      },
      {
        questionText: 'Which scenarios are ideal for using Azure Data Box?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Migrating a VM farm to Azure', isCorrect: true },
          { answerText: 'Performing real-time application migration', isCorrect: false },
          { answerText: 'Exporting data for disaster recovery', isCorrect: true },
          { answerText: 'Moving a media library from offline tapes to Azure', isCorrect: true },
        ],
      },
      {
        questionText: 'What happens to the disks of the Data Box after data is uploaded to Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'They are wiped clean in accordance with NIST 800-88r1 standards', isCorrect: true },
          { answerText: 'They are sent back to the customer', isCorrect: false },
          { answerText: 'They are permanently stored in Azure datacenters', isCorrect: false },
        ],
      },
      {
        questionText: 'Which tool can be used to migrate .NET and PHP web apps to Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'Azure App Service migration assistant', isCorrect: true },
          { answerText: 'Azure Data Box', isCorrect: false },
          { answerText: 'Azure Migrate: Discovery and assessment', isCorrect: false },
        ],
      },
      {
        questionText: 'What is AzCopy?',
        type: 'single',
        answerOptions: [
          { answerText: 'A command-line utility to copy files to or from Azure Storage', isCorrect: true },
          { answerText: 'A graphical interface for managing Azure Storage', isCorrect: false },
          { answerText: 'A synchronization tool for Azure Files', isCorrect: false },
        ],
      },
      {
        questionText: 'Which operations can you perform with AzCopy?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Upload files to Azure', isCorrect: true },
          { answerText: 'Download files from Azure', isCorrect: true },
          { answerText: 'Synchronize files bi-directionally', isCorrect: false },
          { answerText: 'Copy files between storage accounts', isCorrect: true },
        ],
      },
      {
        questionText: 'What is Azure Storage Explorer?',
        type: 'single',
        answerOptions: [
          { answerText: 'A standalone app providing a graphical interface to manage Azure Storage files and blobs', isCorrect: true },
          { answerText: 'A command-line tool for synchronizing files to Azure', isCorrect: false },
          { answerText: 'A tool for migrating large-scale data to Azure', isCorrect: false },
        ],
      },
      {
        questionText: 'What operating systems does Azure Storage Explorer support?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Windows', isCorrect: true },
          { answerText: 'macOS', isCorrect: true },
          { answerText: 'Linux', isCorrect: true },
          { answerText: 'iOS', isCorrect: false },
        ],
      },
      {
        questionText: 'What does Azure File Sync enable?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Centralizing file shares in Azure Files', isCorrect: true },
          { answerText: 'Bi-directional syncing with Azure Files', isCorrect: true },
          { answerText: 'Turning a Windows file server into a content delivery network', isCorrect: true },
          { answerText: 'Synchronizing files with other cloud providers', isCorrect: false },
        ],
      },
      {
        questionText: 'What protocols can be used with Azure File Sync on Windows Server?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Server Message Block (SMB)', isCorrect: true },
          { answerText: 'Network File System (NFS)', isCorrect: true },
          { answerText: 'File Transfer Protocol Secure (FTPS)', isCorrect: true },
          { answerText: 'Hypertext Transfer Protocol (HTTP)', isCorrect: false },
        ],
      },
      {
        questionText: 'What is cloud tiering in Azure File Sync?',
        type: 'single',
        answerOptions: [
          { answerText: 'A feature that keeps frequently accessed files locally and infrequently accessed files in the cloud', isCorrect: true },
          { answerText: 'A feature that automatically backs up files to Azure', isCorrect: false },
          { answerText: 'A method of synchronizing files bi-directionally', isCorrect: false },
        ],
      },
      {
        questionText: 'How does AzCopy handle synchronization?',
        type: 'single',
        answerOptions: [
          { answerText: 'It supports one-direction synchronization only', isCorrect: true },
          { answerText: 'It synchronizes bi-directionally based on metadata', isCorrect: false },
          { answerText: 'It doesn’t support synchronization at all', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Microsoft Entra ID?',
        type: 'single',
        answerOptions: [
          { answerText: 'A cloud-based identity and access management service', isCorrect: true },
          { answerText: 'A file synchronization tool', isCorrect: false },
          { answerText: 'A backup solution for Azure resources', isCorrect: false },
        ],
      },
      {
        questionText: 'Who can benefit from using Microsoft Entra ID?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'IT administrators', isCorrect: true },
          { answerText: 'App developers', isCorrect: true },
          { answerText: 'Users managing their identities', isCorrect: true },
          { answerText: 'Azure Backup service users', isCorrect: false },
        ],
      },
      {
        questionText: 'What does Microsoft Entra ID provide?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Authentication', isCorrect: true },
          { answerText: 'Single sign-on (SSO)', isCorrect: true },
          { answerText: 'Application management', isCorrect: true },
          { answerText: 'Physical server management', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the role of Microsoft Entra Connect?',
        type: 'single',
        answerOptions: [
          { answerText: 'To synchronize user identities between on-premises AD and Microsoft Entra ID', isCorrect: true },
          { answerText: 'To migrate databases to Azure', isCorrect: false },
          { answerText: 'To manage Azure File Sync', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Microsoft Entra Domain Services?',
        type: 'single',
        answerOptions: [
          { answerText: 'A service providing managed domain services like domain join and group policy', isCorrect: true },
          { answerText: 'A command-line utility for moving files to Azure', isCorrect: false },
          { answerText: 'A tool for synchronizing cloud and on-premises databases', isCorrect: false },
        ],
      },
      {
        questionText: 'Which features does Microsoft Entra Domain Services support?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Group policy', isCorrect: true },
          { answerText: 'Kerberos/NTLM authentication', isCorrect: true },
          { answerText: 'File synchronization', isCorrect: false },
          { answerText: 'Domain join', isCorrect: true },
        ],
      },
      {
        questionText: 'How does synchronization work with Microsoft Entra Domain Services?',
        type: 'single',
        answerOptions: [
          { answerText: 'It performs a one-way synchronization from Microsoft Entra ID to Microsoft Entra Domain Services', isCorrect: true },
          { answerText: 'It synchronizes bi-directionally between Microsoft Entra ID and Microsoft Entra Domain Services', isCorrect: false },
          { answerText: 'It synchronizes directly with on-premises AD DS', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a replica set in Microsoft Entra Domain Services?',
        type: 'single',
        answerOptions: [
          { answerText: 'Two Windows Server domain controllers deployed in an Azure region', isCorrect: true },
          { answerText: 'A set of replicated storage accounts in Azure', isCorrect: false },
          { answerText: 'A set of synchronized Azure virtual machines', isCorrect: false },
        ],
    },  
    {
        questionText: 'What is authentication?',
        type: 'single',
        answerOptions: [
          { answerText: 'The process of establishing the identity of a person, service, or device', isCorrect: true },
          { answerText: 'The process of verifying access rights', isCorrect: false },
          { answerText: 'The process of encrypting user data', isCorrect: false },
        ],
      },
      {
        questionText: 'What is single sign-on (SSO)?',
        type: 'single',
        answerOptions: [
          { answerText: 'A method where a user signs in once and accesses multiple resources with one credential', isCorrect: true },
          { answerText: 'A method of two-factor authentication', isCorrect: false },
          { answerText: 'A method that replaces passwords with biometrics', isCorrect: false },
        ],
      },
      {
        questionText: 'What does multifactor authentication (MFA) require?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Something the user knows (e.g., a password)', isCorrect: true },
          { answerText: 'Something the user has (e.g., a mobile device)', isCorrect: true },
          { answerText: 'Something the user is (e.g., a fingerprint)', isCorrect: true },
          { answerText: 'A hardware security token', isCorrect: false },
        ],
      },
      {
        questionText: 'Which methods are available for passwordless authentication in Azure?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Windows Hello for Business', isCorrect: true },
          { answerText: 'Microsoft Authenticator App', isCorrect: true },
          { answerText: 'FIDO2 security keys', isCorrect: true },
          { answerText: 'Single sign-on (SSO)', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the primary benefit of passwordless authentication?',
        type: 'single',
        answerOptions: [
          { answerText: 'Increased security and convenience by removing the need for passwords', isCorrect: true },
          { answerText: 'Elimination of biometric requirements', isCorrect: false },
          { answerText: 'Reduced use of multifactor authentication', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the features of Windows Hello for Business?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Biometric and PIN credentials tied to a user’s PC', isCorrect: true },
          { answerText: 'Public key infrastructure (PKI) integration', isCorrect: true },
          { answerText: 'Built-in support for single sign-on (SSO)', isCorrect: true },
          { answerText: 'Support for non-Windows devices only', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the role of FIDO2 security keys?',
        type: 'single',
        answerOptions: [
          { answerText: 'To provide a standards-based passwordless authentication method', isCorrect: true },
          { answerText: 'To synchronize passwords across devices', isCorrect: false },
          { answerText: 'To replace multifactor authentication', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Microsoft Entra multifactor authentication?',
        type: 'single',
        answerOptions: [
          { answerText: 'A service enabling additional forms of authentication during sign-in', isCorrect: true },
          { answerText: 'A standalone application for passwordless login', isCorrect: false },
          { answerText: 'A security standard replacing SSO', isCorrect: false },
        ],
      },
      {
        questionText: 'What is an external identity?',
        type: 'single',
        answerOptions: [
          { answerText: 'A person, device, or service outside your organization', isCorrect: true },
          { answerText: 'A managed identity within your organization', isCorrect: false },
          { answerText: 'An identity only used for Azure VMs', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Microsoft Entra External ID?',
        type: 'single',
        answerOptions: [
          { answerText: 'All the ways you can securely interact with users outside of your organization', isCorrect: true },
          { answerText: 'A passwordless authentication method', isCorrect: false },
          { answerText: 'An internal identity management system', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the capabilities of External Identities?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'B2B collaboration', isCorrect: true },
          { answerText: 'B2B direct connect', isCorrect: true },
          { answerText: 'Azure AD B2C', isCorrect: true },
          { answerText: 'Internal-only access reviews', isCorrect: false },
        ],
      },
      {
        questionText: 'What does B2B collaboration allow?',
        type: 'single',
        answerOptions: [
          { answerText: 'External users to sign-in using their preferred identity', isCorrect: true },
          { answerText: 'Direct connection with Microsoft Entra resources', isCorrect: false },
          { answerText: 'Passwordless authentication for external users', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of B2B direct connect?',
        type: 'single',
        answerOptions: [
          { answerText: 'To establish a mutual, two-way trust with another Microsoft Entra organization', isCorrect: true },
          { answerText: 'To create passwordless authentication methods', isCorrect: false },
          { answerText: 'To manage external guest accounts directly', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Azure AD B2C used for?',
        type: 'single',
        answerOptions: [
          { answerText: 'Publishing modern SaaS apps or custom-developed apps for consumer access', isCorrect: true },
          { answerText: 'Managing guest access to Teams channels', isCorrect: false },
          { answerText: 'Creating user identities for internal applications', isCorrect: false },
        ],
      },
      {
        questionText: 'How can you manage guest access using Microsoft Entra ID?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'By inviting guests from other tenants', isCorrect: true },
          { answerText: 'By performing access reviews and recertifying access', isCorrect: true },
          { answerText: 'By enforcing password complexity policies', isCorrect: false },
          { answerText: 'By removing access for guests who no longer need it', isCorrect: true },
        ],
      },
      {
        questionText: 'What is the role of access reviews in Microsoft Entra ID?',
        type: 'single',
        answerOptions: [
          { answerText: 'To ensure that guest users have appropriate access and remove unnecessary access', isCorrect: true },
          { answerText: 'To enforce MFA policies on external identities', isCorrect: false },
          { answerText: 'To migrate external users to internal accounts', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Conditional Access in Microsoft Entra ID?',
        type: 'single',
        answerOptions: [
          { answerText: 'A tool that allows or denies access to resources based on identity signals', isCorrect: true },
          { answerText: 'A password management system', isCorrect: false },
          { answerText: 'A service for monitoring Azure resources', isCorrect: false },
        ],
      },
      {
        questionText: 'Which signals does Conditional Access use to make decisions?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Who the user is', isCorrect: true },
          { answerText: 'Where the user is located', isCorrect: true },
          { answerText: 'What device the user is requesting access from', isCorrect: true },
          { answerText: 'The user’s operating system', isCorrect: false },
        ],
      },
      {
        questionText: 'When might Conditional Access require multifactor authentication?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'When a user is signing in from an unusual location', isCorrect: true },
          { answerText: 'When a user is signing in from a high-risk location', isCorrect: true },
          { answerText: 'When a user is using a managed device', isCorrect: false },
          { answerText: 'When a user is accessing an application outside the corporate network', isCorrect: true },
        ],
      },
      {
        questionText: 'What is an example of enforcing a Conditional Access decision?',
        type: 'single',
        answerOptions: [
          { answerText: 'Requiring the user to provide a second form of authentication', isCorrect: true },
          { answerText: 'Sending the user an email notification', isCorrect: false },
          { answerText: 'Blocking the user’s account for 24 hours', isCorrect: false },
        ],
      },
      {
        questionText: 'What are some use cases for Conditional Access?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Requiring MFA based on the requester’s role or location', isCorrect: true },
          { answerText: 'Allowing access only through approved client applications', isCorrect: true },
          { answerText: 'Requiring access only from managed devices', isCorrect: true },
          { answerText: 'Blocking access based on the user’s last login time', isCorrect: false },
        ],
      },
      {
        questionText: 'What benefit does Conditional Access provide for MFA?',
        type: 'single',
        answerOptions: [
          { answerText: 'It allows a more granular MFA experience based on sign-in signals', isCorrect: true },
          { answerText: 'It disables MFA for known locations', isCorrect: false },
          { answerText: 'It enforces MFA for all users regardless of conditions', isCorrect: false },
        ],
      },
      {
        questionText: 'What action might Conditional Access take if a user signs in from a known location?',
        type: 'single',
        answerOptions: [
          { answerText: 'It might not challenge the user for a second authentication factor', isCorrect: true },
          { answerText: 'It blocks the user from accessing resources', isCorrect: false },
          { answerText: 'It requests the user’s manager to approve access', isCorrect: false },
        ],
      },
      {
        questionText: 'What does Conditional Access do during sign-in?',
        type: 'single',
        answerOptions: [
          { answerText: 'Collects signals, makes decisions, and enforces access rules', isCorrect: true },
          { answerText: 'Logs the user out of all other applications', isCorrect: false },
          { answerText: 'Changes the user’s role within the system', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the principle of least privilege?',
        type: 'single',
        answerOptions: [
          { answerText: 'Only granting access up to the level needed to complete a task', isCorrect: true },
          { answerText: 'Providing maximum access to all resources for convenience', isCorrect: false },
          { answerText: 'Granting access to resources only after MFA', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Azure role-based access control (Azure RBAC)?',
        type: 'single',
        answerOptions: [
          { answerText: 'A tool to control access to resources through roles and permissions', isCorrect: true },
          { answerText: 'A method for encrypting storage blobs', isCorrect: false },
          { answerText: 'A command-line utility for Azure resources', isCorrect: false },
        ],
      },
      {
        questionText: 'What does Azure RBAC enable you to do?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Assign roles with a defined set of access permissions', isCorrect: true },
          { answerText: 'Control access to resources based on roles', isCorrect: true },
          { answerText: 'Provide access to all users by default', isCorrect: false },
          { answerText: 'Define custom roles for specific access needs', isCorrect: true },
        ],
      },
      {
        questionText: 'What happens when a new engineer is added to an Azure RBAC group?',
        type: 'single',
        answerOptions: [
          { answerText: 'They automatically receive the same access as other members of the group', isCorrect: true },
          { answerText: 'They must manually request access to resources', isCorrect: false },
          { answerText: 'They are denied access until approved by an admin', isCorrect: false },
        ],
      },
      {
        questionText: 'How is role-based access control applied in Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'Through a scope, which is a resource or set of resources', isCorrect: true },
          { answerText: 'By directly assigning permissions to individual users', isCorrect: false },
          { answerText: 'By creating unique roles for each user', isCorrect: false },
        ],
      },
      {
        questionText: 'What are built-in roles in Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'Predefined roles with associated access permissions for common tasks', isCorrect: true },
          { answerText: 'Roles created by users to meet specific requirements', isCorrect: false },
          { answerText: 'Roles that only apply to storage blobs', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the benefits of using Azure RBAC?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Simplifies managing permissions for teams and resources', isCorrect: true },
          { answerText: 'Ensures compliance with the principle of least privilege', isCorrect: true },
          { answerText: 'Requires individual permissions for each user and resource', isCorrect: false },
          { answerText: 'Automatically updates roles for new resources', isCorrect: true },
        ],
      },
      {
        questionText: 'Can you define custom roles in Azure RBAC?',
        type: 'single',
        answerOptions: [
          { answerText: 'Yes, custom roles can be created for specific access needs', isCorrect: true },
          { answerText: 'No, only built-in roles are supported', isCorrect: false },
          { answerText: 'Yes, but only for storage resources', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the scopes in Azure RBAC?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'A management group', isCorrect: true },
          { answerText: 'A single subscription', isCorrect: true },
          { answerText: 'A resource group', isCorrect: true },
          { answerText: 'A single resource', isCorrect: true },
        ],
      },
      {
        questionText: 'What happens when you grant access at a parent scope in Azure RBAC?',
        type: 'single',
        answerOptions: [
          { answerText: 'Permissions are inherited by all child scopes', isCorrect: true },
          { answerText: 'Permissions are limited to the parent scope only', isCorrect: false },
          { answerText: 'Permissions must be manually assigned to child scopes', isCorrect: false },
        ],
      },
      {
        questionText: 'If you assign the Owner role at the management group scope, what does the user gain access to?',
        type: 'single',
        answerOptions: [
          { answerText: 'Everything in all subscriptions within the management group', isCorrect: true },
          { answerText: 'Only specific resources within the management group', isCorrect: false },
          { answerText: 'Only applications within the management group', isCorrect: false },
        ],
      },
      {
        questionText: 'What does the Reader role allow at the subscription scope?',
        type: 'single',
        answerOptions: [
          { answerText: 'Viewing every resource group and resource within the subscription', isCorrect: true },
          { answerText: 'Modifying resources within the subscription', isCorrect: false },
          { answerText: 'Deleting resource groups within the subscription', isCorrect: false },
        ],
      },
      {
        questionText: 'How is Azure RBAC enforced?',
        type: 'single',
        answerOptions: [
          { answerText: 'On any action initiated against an Azure resource via Azure Resource Manager', isCorrect: true },
          { answerText: 'Only for application-level security actions', isCorrect: false },
          { answerText: 'Through manual review of access logs', isCorrect: false },
        ],
      },
      {
        questionText: 'Which tools can you use to access Azure Resource Manager?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Azure portal', isCorrect: true },
          { answerText: 'Azure Cloud Shell', isCorrect: true },
          { answerText: 'Azure PowerShell', isCorrect: true },
          { answerText: 'Azure CLI', isCorrect: true },
        ],
      },
      {
        questionText: 'Does Azure RBAC enforce access permissions at the application or data level?',
        type: 'single',
        answerOptions: [
          { answerText: 'No, application security must be handled by your application', isCorrect: true },
          { answerText: 'Yes, Azure RBAC controls application-level security', isCorrect: false },
          { answerText: 'Yes, Azure RBAC handles data-level security by default', isCorrect: false },
        ],
      },
      {
        questionText: 'What happens if two different role assignments grant read and write permissions on the same resource group?',
        type: 'single',
        answerOptions: [
          { answerText: 'You have both read and write permissions on that resource group', isCorrect: true },
          { answerText: 'Only the higher permission (write) is applied', isCorrect: false },
          { answerText: 'Only the first assigned permission is applied', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the Zero Trust security model?',
        type: 'single',
        answerOptions: [
          { answerText: 'A security model that assumes breach and verifies each request as though from an uncontrolled network', isCorrect: true },
          { answerText: 'A model that provides unrestricted access to trusted devices', isCorrect: false },
          { answerText: 'A security framework for internal networks only', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the guiding principles of the Zero Trust model?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Verify explicitly', isCorrect: true },
          { answerText: 'Use least privilege access', isCorrect: true },
          { answerText: 'Assume breach', isCorrect: true },
          { answerText: 'Trust all internal devices', isCorrect: false },
        ],
      },
      {
        questionText: 'What does the principle of "verify explicitly" mean in Zero Trust?',
        type: 'single',
        answerOptions: [
          { answerText: 'Always authenticate and authorize based on all available data points', isCorrect: true },
          { answerText: 'Authenticate devices only within the corporate network', isCorrect: false },
          { answerText: 'Authorize access without additional verification', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the principle of "use least privilege access"?',
        type: 'single',
        answerOptions: [
          { answerText: 'Limit user access with Just-In-Time and Just-Enough-Access policies', isCorrect: true },
          { answerText: 'Provide full access to all authenticated users', isCorrect: false },
          { answerText: 'Restrict access to internal applications only', isCorrect: false },
        ],
      },
      {
        questionText: 'How does Zero Trust apply the principle of "assume breach"?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Minimize blast radius and segment access', isCorrect: true },
          { answerText: 'Verify end-to-end encryption', isCorrect: true },
          { answerText: 'Use analytics for visibility and threat detection', isCorrect: true },
          { answerText: 'Grant unrestricted access to internal networks', isCorrect: false },
        ],
      },
      {
        questionText: 'How does the Zero Trust model differ from traditional corporate network security?',
        type: 'single',
        answerOptions: [
          { answerText: 'It does not assume devices are safe just because they are within the corporate network', isCorrect: true },
          { answerText: 'It assumes all internal devices are secure', isCorrect: false },
          { answerText: 'It requires VPN access for all devices', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the main purpose of the Zero Trust model?',
        type: 'single',
        answerOptions: [
          { answerText: 'To adapt to modern environments and protect people, devices, applications, and data', isCorrect: true },
          { answerText: 'To eliminate the need for encryption', isCorrect: false },
          { answerText: 'To limit access to corporate networks only', isCorrect: false },
        ],
      },
      {
        questionText: 'What is one advantage of using analytics in the Zero Trust model?',
        type: 'single',
        answerOptions: [
          { answerText: 'It improves threat detection and defenses', isCorrect: true },
          { answerText: 'It eliminates the need for authentication', isCorrect: false },
          { answerText: 'It simplifies access for unmanaged devices', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the objective of the defense-in-depth strategy?',
        type: 'single',
        answerOptions: [
          { answerText: 'To protect information and prevent unauthorized access', isCorrect: true },
          { answerText: 'To eliminate the need for multiple security layers', isCorrect: false },
          { answerText: 'To rely on a single layer of protection', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a key benefit of using a defense-in-depth strategy?',
        type: 'single',
        answerOptions: [
          { answerText: 'It slows down an attack and provides alert information for security teams', isCorrect: true },
          { answerText: 'It replaces the need for physical security', isCorrect: false },
          { answerText: 'It removes the need for encryption', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the role of the physical security layer in defense-in-depth?',
        type: 'single',
        answerOptions: [
          { answerText: 'To provide physical safeguards against access to datacenter assets', isCorrect: true },
          { answerText: 'To encrypt sensitive application data', isCorrect: false },
          { answerText: 'To secure network connectivity', isCorrect: false },
        ],
      },
      {
        questionText: 'Which actions are important at the identity and access layer?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Use single sign-on (SSO) and multifactor authentication', isCorrect: true },
          { answerText: 'Audit events and changes', isCorrect: true },
          { answerText: 'Control access to infrastructure and change control', isCorrect: true },
          { answerText: 'Encrypt physical devices in the datacenter', isCorrect: false },
        ],
      },
      {
        questionText: 'How does the perimeter layer protect resources?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Uses DDoS protection to filter large-scale attacks', isCorrect: true },
          { answerText: 'Uses perimeter firewalls to alert on malicious attacks', isCorrect: true },
          { answerText: 'Encrypts application-level data', isCorrect: false },
          { answerText: 'Limits outbound network access', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the primary focus of the network layer in defense-in-depth?',
        type: 'single',
        answerOptions: [
          { answerText: 'Limiting network connectivity to allow only necessary communication', isCorrect: true },
          { answerText: 'Ensuring all data is encrypted', isCorrect: false },
          { answerText: 'Managing application development', isCorrect: false },
        ],
      },
      {
        questionText: 'What should be prioritized at the compute layer?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Secure access to virtual machines', isCorrect: true },
          { answerText: 'Implement endpoint protection on devices', isCorrect: true },
          { answerText: 'Keep systems patched and current', isCorrect: true },
          { answerText: 'Limit outbound internet access', isCorrect: false },
        ],
      },
      {
        questionText: 'What is important at the application layer?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Ensure applications are secure and free of vulnerabilities', isCorrect: true },
          { answerText: 'Store sensitive application secrets in a secure storage medium', isCorrect: true },
          { answerText: 'Limit inbound internet access', isCorrect: false },
          { answerText: 'Make security a design requirement for all development', isCorrect: true },
        ],
      },
      {
        questionText: 'What is the responsibility at the data layer?',
        type: 'single',
        answerOptions: [
          { answerText: 'Ensuring data is properly secured based on regulatory requirements', isCorrect: true },
          { answerText: 'Encrypting all physical hardware in the datacenter', isCorrect: false },
          { answerText: 'Allowing unrestricted access to stored data', isCorrect: false },
        ],
      },
      {
        questionText: 'What is Microsoft Defender for Cloud?',
        type: 'single',
        answerOptions: [
          { answerText: 'A monitoring tool for security posture management and threat protection', isCorrect: true },
          { answerText: 'A tool for managing Azure subscriptions', isCorrect: false },
          { answerText: 'A file synchronization service', isCorrect: false },
        ],
      },
      {
        questionText: 'What environments can Microsoft Defender for Cloud monitor?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Azure cloud', isCorrect: true },
          { answerText: 'On-premises datacenters', isCorrect: true },
          { answerText: 'Hybrid environments', isCorrect: true },
          { answerText: 'Multicloud environments', isCorrect: true },
        ],
      },
      {
        questionText: 'How does Microsoft Defender for Cloud help secure Azure PaaS services?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Detects threats targeting Azure services like App Service and Azure SQL', isCorrect: true },
          { answerText: 'Provides anomaly detection on Azure activity logs', isCorrect: true },
          { answerText: 'Encrypts all data stored in Azure SQL', isCorrect: false },
          { answerText: 'Automatically fixes vulnerabilities in code', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of Defender for Cloud’s secure score?',
        type: 'single',
        answerOptions: [
          { answerText: 'To provide an indicator of the health of your security posture', isCorrect: true },
          { answerText: 'To display the number of virtual machines in use', isCorrect: false },
          { answerText: 'To manage subscriptions across Azure regions', isCorrect: false },
        ],
      },
      {
        questionText: 'What features does Defender for Cloud provide for hybrid environments?',
        type: 'single',
        answerOptions: [
          { answerText: 'Extended protection to non-Azure machines via Azure Arc', isCorrect: true },
          { answerText: 'Automatic encryption of on-premises databases', isCorrect: false },
          { answerText: 'Real-time synchronization of files between clouds', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the three main functions of Defender for Cloud?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Continuously assess security posture', isCorrect: true },
          { answerText: 'Harden resources and services', isCorrect: true },
          { answerText: 'Detect and resolve threats', isCorrect: true },
          { answerText: 'Migrate virtual machines to the cloud', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the role of security alerts in Defender for Cloud?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Describe details of affected resources', isCorrect: true },
          { answerText: 'Suggest remediation steps', isCorrect: true },
          { answerText: 'Provide options to trigger automated responses', isCorrect: true },
          { answerText: 'Automatically resolve all security issues', isCorrect: false },
        ],
      },
      {
        questionText: 'How does Defender for Cloud handle new resources?',
        type: 'single',
        answerOptions: [
          { answerText: 'It assesses new resources and provides recommendations for improving security', isCorrect: true },
          { answerText: 'It automatically blocks access to new resources', isCorrect: false },
          { answerText: 'It deletes any resources not following security standards', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the Microsoft Cloud Adoption Framework for Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'A collection of documentation, guidance, best practices, and tools for cloud adoption', isCorrect: true },
          { answerText: 'A cloud management tool for Azure resources', isCorrect: false },
          { answerText: 'A financial model for Azure cost optimization', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the three main stages of the Cloud Adoption Framework?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Plan', isCorrect: true },
          { answerText: 'Ready', isCorrect: true },
          { answerText: 'Adopt', isCorrect: true },
          { answerText: 'Monitor', isCorrect: false },
        ],
      },
      {
        questionText: 'What precedes the three main stages of the Cloud Adoption Framework?',
        type: 'single',
        answerOptions: [
          { answerText: 'Business strategy phase', isCorrect: true },
          { answerText: 'Operations phase', isCorrect: false },
          { answerText: 'Migration phase', isCorrect: false },
        ],
      },
      {
        questionText: 'What does the Cloud Adoption Framework emphasize in the business strategy phase?',
        type: 'single',
        answerOptions: [
          { answerText: 'Aligning the strategy to actionable technology projects', isCorrect: true },
          { answerText: 'Reducing costs of cloud infrastructure', isCorrect: false },
          { answerText: 'Implementing immediate cloud governance', isCorrect: false },
        ],
      },
      {
        questionText: 'What are key organizational actions described in the Cloud Adoption Framework?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Prepare people with technical readiness', isCorrect: true },
          { answerText: 'Adjust processes to drive changes', isCorrect: true },
          { answerText: 'Enable business outcomes with technology plans', isCorrect: true },
          { answerText: 'Focus solely on cost optimization', isCorrect: false },
        ],
      },
      {
        questionText: 'What phase surrounds the cloud adoption journey in the Cloud Adoption Framework?',
        type: 'single',
        answerOptions: [
          { answerText: 'Operations phase', isCorrect: true },
          { answerText: 'Monitoring phase', isCorrect: false },
          { answerText: 'Governance phase', isCorrect: false },
        ],
      },
      {
        questionText: 'Why do organizations need the Cloud Adoption Framework?',
        type: 'single',
        answerOptions: [
          { answerText: 'To provide a proven and consistent methodology for adopting cloud technologies', isCorrect: true },
          { answerText: 'To reduce Azure subscription costs', isCorrect: false },
          { answerText: 'To automate all cloud operations', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the primary goal of the Cloud Adoption Framework?',
        type: 'single',
        answerOptions: [
          { answerText: 'To align business and technology strategies for successful cloud adoption', isCorrect: true },
          { answerText: 'To replace traditional data centers', isCorrect: false },
          { answerText: 'To provide unlimited Azure credits', isCorrect: false },
        ],
      },
      {
        questionText: 'What are common triggers for organizations to adopt new technologies like Azure?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Preparation for new technical capabilities', isCorrect: true },
          { answerText: 'Gaining scale to meet market or geographic demands', isCorrect: true },
          { answerText: 'Cost savings', isCorrect: true },
          { answerText: 'Reduction in vendor or technical complexity', isCorrect: true },
        ],
      },
      {
        questionText: 'What drives organizations to migrate current applications or create new capabilities?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Optimization of internal operations', isCorrect: true },
          { answerText: 'Increased business agility', isCorrect: true },
          { answerText: 'Improvements to customer experiences or engagements', isCorrect: true },
          { answerText: 'Transformation of products or services', isCorrect: true },
        ],
      },
      {
        questionText: 'What is a potential motivation for transforming products or services with Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'Disruption of the market with new products or services', isCorrect: true },
          { answerText: 'Scaling down operations', isCorrect: false },
          { answerText: 'Eliminating customer engagement', isCorrect: false },
        ],
      },
      {
        questionText: 'How can Azure adoption improve business agility?',
        type: 'single',
        answerOptions: [
          { answerText: 'By enabling faster responses to market demands', isCorrect: true },
          { answerText: 'By eliminating the need for technical updates', isCorrect: false },
          { answerText: 'By reducing customer interactions', isCorrect: false },
        ],
      },
      {
        questionText: 'Why might an organization focus on cost savings when adopting Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'To reduce expenses while leveraging cloud capabilities', isCorrect: true },
          { answerText: 'To eliminate the need for innovation', isCorrect: false },
          { answerText: 'To increase reliance on outdated systems', isCorrect: false },
        ],
      },
      {
        questionText: 'What benefits can Azure adoption bring to customer experiences?',
        type: 'single',
        answerOptions: [
          { answerText: 'Improvements in engagement and satisfaction', isCorrect: true },
          { answerText: 'A reduction in available services', isCorrect: false },
          { answerText: 'Elimination of customer feedback systems', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a key focus when defining your cloud business strategy?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Establish clear business outcomes', isCorrect: true },
          { answerText: 'Define business justification', isCorrect: true },
          { answerText: 'Focus on global reach and performance', isCorrect: true },
          { answerText: 'Ignore financial implications', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the criteria for selecting the first application for cloud adoption?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Business criteria: Strong motivation to move to the cloud', isCorrect: true },
          { answerText: 'Technical criteria: Minimum dependencies and small group of assets', isCorrect: true },
          { answerText: 'Select an application interacting with secure data', isCorrect: false },
          { answerText: 'Choose applications with complex governance needs', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a business outcome in the context of cloud adoption?',
        type: 'single',
        answerOptions: [
          { answerText: 'A concise, observable change in business performance measured by a specific metric', isCorrect: true },
          { answerText: 'A subjective improvement in customer satisfaction', isCorrect: false },
          { answerText: 'A reduction in operational complexity', isCorrect: false },
        ],
      },
      {
        questionText: 'Who are key players in the cloud strategy team?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Business leaders from finance', isCorrect: true },
          { answerText: 'IT infrastructure leaders', isCorrect: true },
          { answerText: 'Application group leaders', isCorrect: true },
          { answerText: 'Only the Chief Technology Officer (CTO)', isCorrect: false },
        ],
      },
      {
        questionText: 'What tools can support financial planning for cloud adoption?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Azure Total Cost of Ownership (TCO) Calculator', isCorrect: true },
          { answerText: 'Azure pricing calculator', isCorrect: true },
          { answerText: 'Microsoft Cost Management + Billing', isCorrect: true },
          { answerText: 'Azure Policy Manager', isCorrect: false },
        ],
      },
      {
        questionText: 'What are some common business value areas for cloud computing?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Cost: Eliminates capital expense', isCorrect: true },
          { answerText: 'Scale: Ability to scale elastically', isCorrect: true },
          { answerText: 'Productivity: Removes IT management chores', isCorrect: true },
          { answerText: 'Reliability: Simplifies disaster recovery and continuity', isCorrect: true },
        ],
      },
      {
        questionText: 'What should the first adoption project align with?',
        type: 'single',
        answerOptions: [
          { answerText: 'Your motivations for cloud adoption', isCorrect: true },
          { answerText: 'The lowest cost solution available', isCorrect: false },
          { answerText: 'Applications with the most secure data', isCorrect: false },
        ],
      },
      {
        questionText: 'Why is selecting the first cloud application important?',
        type: 'single',
        answerOptions: [
          { answerText: 'It helps test and build confidence for future cloud adoption efforts', isCorrect: true },
          { answerText: 'It eliminates the need for future planning', isCorrect: false },
          { answerText: 'It automatically ensures governance capacity', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the two main actions in the Plan stage of the cloud adoption journey?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Rationalize your digital estate', isCorrect: true },
          { answerText: 'Create your cloud adoption plan', isCorrect: true },
          { answerText: 'Implement cloud governance', isCorrect: false },
          { answerText: 'Migrate all applications at once', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a digital estate?',
        type: 'single',
        answerOptions: [
          { answerText: 'The collection of IT assets that power business processes and supporting operations', isCorrect: true },
          { answerText: 'A database of customer interactions', isCorrect: false },
          { answerText: 'A collection of cloud-native applications', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the Five Rs of cloud rationalization?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Rehost', isCorrect: true },
          { answerText: 'Refactor', isCorrect: true },
          { answerText: 'Rearchitect', isCorrect: true },
          { answerText: 'Rebuild/New', isCorrect: true },
          { answerText: 'Replace', isCorrect: true },
        ],
      },
      {
        questionText: 'What is the expected outcome of rehosting?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Reduce capital expense', isCorrect: true },
          { answerText: 'Free up datacenter space', isCorrect: true },
          { answerText: 'Achieve rapid return on investment in the cloud', isCorrect: true },
          { answerText: 'Standardize business processes', isCorrect: false },
        ],
      },
      {
        questionText: 'When should you use the rearchitect option for cloud rationalization?',
        type: 'single',
        answerOptions: [
          { answerText: 'For aging applications that aren’t compatible with the cloud', isCorrect: true },
          { answerText: 'For unsupported or misaligned applications', isCorrect: false },
          { answerText: 'For applications that are cloud-native', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the primary goal of the rebuild/new option in cloud rationalization?',
        type: 'single',
        answerOptions: [
          { answerText: 'To accelerate innovation and reduce operational cost', isCorrect: true },
          { answerText: 'To free up datacenter space', isCorrect: false },
          { answerText: 'To implement lift-and-shift migration', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the key steps to creating a cloud adoption plan?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Review sample business outcomes', isCorrect: true },
          { answerText: 'Identify leading metrics for progress', isCorrect: true },
          { answerText: 'Establish a financial model aligned with outcomes', isCorrect: true },
          { answerText: 'Migrate all workloads simultaneously', isCorrect: false },
        ],
      },
      {
        questionText: 'Why is proceeding incrementally important during cloud rationalization?',
        type: 'single',
        answerOptions: [
          { answerText: 'To avoid making decisions too broadly or too early', isCorrect: true },
          { answerText: 'To ensure all applications are migrated simultaneously', isCorrect: false },
          { answerText: 'To eliminate governance requirements', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a landing zone in the context of cloud adoption?',
        type: 'single',
        answerOptions: [
          { answerText: 'An environment provisioned and prepared to host workloads in the cloud', isCorrect: true },
          { answerText: 'A physical location for datacenters', isCorrect: false },
          { answerText: 'A specific application deployment', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of a skills-readiness plan?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Address current skill gaps', isCorrect: true },
          { answerText: 'Ensure IT and business teams are ready for change', isCorrect: true },
          { answerText: 'Define support needs', isCorrect: true },
          { answerText: 'Migrate all workloads simultaneously', isCorrect: false },
        ],
      },
      {
        questionText: 'Why is creating a landing zone important?',
        type: 'single',
        answerOptions: [
          { answerText: 'It sets up a migration target in the cloud to handle prioritized applications', isCorrect: true },
          { answerText: 'It defines the financial model for cloud adoption', isCorrect: false },
          { answerText: 'It replaces the need for skills readiness', isCorrect: false },
        ],
      },
      {
        questionText: 'What does the Azure readiness guide introduce?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Features to organize resources', isCorrect: true },
          { answerText: 'Ways to control costs', isCorrect: true },
          { answerText: 'Methods to secure and manage Azure subscriptions', isCorrect: true },
          { answerText: 'Automatic migration of all applications', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the final deliverable of any iteration of the Cloud Adoption Framework?',
        type: 'single',
        answerOptions: [
          { answerText: 'A fully functioning landing zone', isCorrect: true },
          { answerText: 'A skills-readiness plan', isCorrect: false },
          { answerText: 'A cost optimization report', isCorrect: false },
        ],
      },
      {
        questionText: 'Who needs to be involved in cloud adoption for it to succeed?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Business decision makers', isCorrect: true },
          { answerText: 'End users', isCorrect: true },
          { answerText: 'IT and business teams', isCorrect: true },
          { answerText: 'Only external consultants', isCorrect: false },
        ],
      },
      {
        questionText: 'What tools or features help with cost management in Azure?',
        type: 'single',
        answerOptions: [
          { answerText: 'Microsoft Cost Management + Billing', isCorrect: true },
          { answerText: 'Azure CLI', isCorrect: false },
          { answerText: 'Azure DevOps', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of standards-based Azure Blueprints?',
        type: 'single',
        answerOptions: [
          { answerText: 'To provide ready-to-use or customizable samples for setting up environments', isCorrect: true },
          { answerText: 'To automate application migrations', isCorrect: false },
          { answerText: 'To define pricing models for Azure subscriptions', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the two main options in the Adopt stage of cloud adoption?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Migrate', isCorrect: true },
          { answerText: 'Innovate', isCorrect: true },
          { answerText: 'Govern', isCorrect: false },
          { answerText: 'Scale', isCorrect: false },
        ],
      },
      {
        questionText: 'What is cloud migration?',
        type: 'single',
        answerOptions: [
          { answerText: 'The process of moving existing digital assets to a cloud platform', isCorrect: true },
          { answerText: 'The creation of new cloud-native applications', isCorrect: false },
          { answerText: 'The optimization of existing cloud resources', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a key benefit of cloud migration?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Accelerate the pace of change', isCorrect: true },
          { answerText: 'Avoid planned capital expenditures', isCorrect: true },
          { answerText: 'Reduce ongoing operational costs', isCorrect: true },
          { answerText: 'Eliminate the need for change management', isCorrect: false },
        ],
      },
      {
        questionText: 'What are some factors that influence the strategy and tools for cloud migration?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Business motivations', isCorrect: true },
          { answerText: 'Technology strategies', isCorrect: true },
          { answerText: 'Timelines', isCorrect: true },
          { answerText: 'Application portfolio governance', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the processes involved in managing the migration backlog?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Assess', isCorrect: true },
          { answerText: 'Migrate', isCorrect: true },
          { answerText: 'Optimize', isCorrect: true },
          { answerText: 'Secure', isCorrect: true },
        ],
      },
      {
        questionText: 'How do cloud-native applications accelerate development and experimentation?',
        type: 'single',
        answerOptions: [
          { answerText: 'By shortening the time from idea to product transformation', isCorrect: true },
          { answerText: 'By eliminating the need for customer feedback', isCorrect: false },
          { answerText: 'By reducing the need for modern infrastructure', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a key outcome of modernization and innovation in the IT portfolio?',
        type: 'single',
        answerOptions: [
          { answerText: 'Tighter alignment with DevOps and accelerated innovation', isCorrect: true },
          { answerText: 'Elimination of digital estate rationalization', isCorrect: false },
          { answerText: 'Migration of all workloads to the cloud', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the steps for preparing the migration backlog?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Migration preparation', isCorrect: true },
          { answerText: 'Define business outcomes', isCorrect: true },
          { answerText: 'Estimate the digital estate', isCorrect: true },
          { answerText: 'Establish change management requirements', isCorrect: true },
        ],
      },
      {
        questionText: 'What is the goal of cloud governance in the Cloud Adoption Framework?',
        type: 'single',
        answerOptions: [
          { answerText: 'To create guardrails that keep the organization on a safe path during cloud adoption', isCorrect: true },
          { answerText: 'To migrate all applications to the cloud simultaneously', isCorrect: false },
          { answerText: 'To eliminate the need for IT governance', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the purpose of a minimum viable product (MVP) in cloud governance?',
        type: 'single',
        answerOptions: [
          { answerText: 'To establish a foundation for adoption and governance', isCorrect: true },
          { answerText: 'To finalize the cloud governance process', isCorrect: false },
          { answerText: 'To avoid creating governance policies', isCorrect: false },
        ],
      },
      {
        questionText: 'What are the Five Disciplines of Cloud Governance?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Cost Management', isCorrect: true },
          { answerText: 'Security Baseline', isCorrect: true },
          { answerText: 'Resource Consistency', isCorrect: true },
          { answerText: 'Identity Baseline', isCorrect: true },
          { answerText: 'Deployment Acceleration', isCorrect: true },
        ],
      },
      {
        questionText: 'What is the main goal of the Manage methodology in cloud operations?',
        type: 'single',
        answerOptions: [
          { answerText: 'To create balance between stability and operational costs', isCorrect: true },
          { answerText: 'To migrate applications to the cloud', isCorrect: false },
          { answerText: 'To eliminate operational compliance requirements', isCorrect: false },
        ],
      },
      {
        questionText: 'What are early-stage focuses in cloud operations maturity?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Inventory of cloud assets', isCorrect: true },
          { answerText: 'Visibility into performance', isCorrect: true },
          { answerText: 'Compliance with operational standards', isCorrect: true },
          { answerText: 'Automation of all processes', isCorrect: false },
        ],
      },
      {
        questionText: 'How do protection and recovery services benefit cloud operations?',
        type: 'single',
        answerOptions: [
          { answerText: 'They reduce the duration and effect of business process interruptions', isCorrect: true },
          { answerText: 'They eliminate the need for compliance', isCorrect: false },
          { answerText: 'They replace state management', isCorrect: false },
        ],
      },
      {
        questionText: 'What aspects are adjusted and automated during platform operations?',
        type: 'multiple',
        answerOptions: [
          { answerText: 'Containers', isCorrect: true },
          { answerText: 'Data platforms', isCorrect: true },
          { answerText: 'Resource performance', isCorrect: true },
          { answerText: 'Manual processes', isCorrect: false },
        ],
      },
      {
        questionText: 'Why is a flexible approach to governance required during cloud adoption?',
        type: 'single',
        answerOptions: [
          { answerText: 'Governance requirements evolve throughout the cloud adoption journey', isCorrect: true },
          { answerText: 'Governance requirements are static and unchanging', isCorrect: false },
          { answerText: 'Governance only applies to the initial migration phase', isCorrect: false },
        ],
      },
  ];
  
  export default questions;
  