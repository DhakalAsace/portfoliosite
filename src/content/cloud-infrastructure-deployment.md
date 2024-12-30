# AWS Infrastructure Deployment: EC2, ALB, VPC, and S3

## Project Overview

The **AWS Infrastructure Deployment Project** focused on designing and deploying a secure, scalable cloud architecture using Amazon Web Services (AWS). This semester-long project, undertaken solo, aimed to create a robust environment encompassing compute, storage, networking, and security solutions. The project demonstrates proficiency in cloud architecture design, AWS service configuration, and best practices in cloud deployment.

From configuring virtual private networks to implementing a seamless web application backed by load balancing and storage policies, this project showcases advanced cloud engineering and problem-solving skills.

---

## Key Highlights

- **Tools & Technologies**:  
  - AWS Services: VPC, EC2, S3, Application Load Balancer (ALB), IAM, and CloudShell.  
  - Networking: Custom subnets, route tables, NACLs, and security groups.  
  - Automation: User Data scripts for EC2 instance initialization.  

- **Features**:  
  - Secure and high-availability architecture for web applications.  
  - Automated web server setup with Apache.  
  - Comprehensive lifecycle management for S3 buckets.  

---

## The Journey: Challenges and Solutions

### Networking and Security

**Challenge**: Configuring a secure and scalable VPC with precise access control.  
**Solution**:  
- Designed a VPC with a `/16` CIDR block and four subnets (two public and two private).  
- Configured a custom Internet Gateway, route tables, and security groups for public-facing EC2 instances.  
- Implemented NACLs to restrict access to specific IP ranges, ensuring robust network security.

---

### Compute and Load Balancing

**Challenge**: Deploying a resilient web application using EC2 instances and ALB.  
**Solution**:  
- Launched four EC2 instances (two for "Register" and two for "Cart" applications) using User Data to automate Apache installation and initialization.  
- Configured an Application Load Balancer with two target groups and appropriate health checks to balance traffic across the web servers.

---

### Storage Management

**Challenge**: Ensuring efficient and cost-effective storage with S3.  
**Solution**:  
- Created an S3 bucket with versioning enabled for secure backup of AMIs.  
- Configured lifecycle policies to transition data to One-Zone IA after 90 days, optimizing storage costs.

---

### Windows Server Deployment

**Challenge**: Restricting access to a Windows Server instance to specific external IPs.  
**Solution**:  
- Deployed a Windows Server in a public subnet and configured a NACL to allow only my public IP for Remote Desktop Protocol (RDP) access.  
- Successfully tested connectivity and documented configurations.

---

## Technical Specifications

### Core Features
1. **VPC and Networking**:
   - CIDR block: `/16`.
   - Subnets: Two public, two private.
   - Route tables: Custom configurations for public and private traffic.
   - Internet Gateway: For public subnet access.

2. **EC2 Instances**:
   - Applications: "Register" and "Cart".
   - User Data: Automated Apache setup and webpage initialization.
   - Snapshots and AMIs: Backups of running instances.

3. **Application Load Balancer**:
   - Target Groups: Separate groups for "Register" and "Cart".
   - Health Checks: Configured for each target group.

4. **S3 Bucket**:
   - Enabled versioning and lifecycle policies.
   - Secured bucket access (no public access).

5. **Windows Server**:
   - Restricted RDP access to my IP address.

---

## Testing and Validation

- **Functional Testing**:
  - Verified web application functionality via ALB endpoints.  
  - Tested RDP access to Windows Server.  

- **Performance Validation**:
  - Ensured health checks for target groups maintain load balancing efficiency.  

- **Security Validation**:
  - Validated NACLs and security groups for restricted access.

---

## Metrics and Achievements

- **Infrastructure Size**:  
  - 1 VPC, 4 subnets, 4 EC2 instances, 1 ALB, 1 S3 bucket.

- **Cost Optimization**:  
  - Implemented lifecycle policies for cost-efficient storage.  

- **Security**:  
  - Hardened network with custom NACLs and security groups.

---

## Lessons Learned and Future Enhancements

### Lessons Learned
1. Importance of structured network design for secure, scalable cloud solutions.  
2. Efficient use of lifecycle policies to optimize costs.  
3. Automation's role in reducing manual errors during deployment.

### Future Enhancements
- Introduce auto-scaling for EC2 instances based on load.  
- Implement CloudFormation for Infrastructure as Code (IaC).  
- Enhance monitoring with CloudWatch for real-time metrics and alerts.  

---
