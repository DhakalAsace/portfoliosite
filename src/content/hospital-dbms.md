# Hospital Database Management System

## Project Overview

The **Hospital Database Management System** was developed as a semester-long project by a team of four students, including myself, for Lake Ridge Community Hospital (LRCH). This project aimed to address critical challenges in patient data management, financial tracking, and operational efficiency by implementing a scalable, secure, and reliable database system.

The project showcases proficiency in database design, SQL programming, and application of healthcare IT standards. It effectively integrates various hospital operations, offering a robust foundation for future scalability and adaptability.

---

## Design Documentation
The complete database design proposal for Lake Ridge Community Hospital (LRCH) is available as a comprehensive document. This proposal includes detailed entity-relationship diagrams, normalized schema designs, and implementation specifications.

📄 [View Full Database Design Proposal (PDF)](/images/diagrams/Database%20Design%20Proposal%20for%20Lake%20Ridge%20Community%20Hospital%20(LRCH).pdf)

### Key Design Features
- Normalized database schema following BCNF standards
- Comprehensive entity relationships mapping
- Data integrity constraints and referential rules
- Security and access control specifications

---

## Key Highlights

- **Technologies**: SQL Server, Stored Procedures, Relational Database Design
- **Development Approach**: Collaborative teamwork, Agile methodology
- **Features**:
  - Patient record management
  - Financial and billing systems
  - Treatment and admission tracking
  - Data-driven reports (e.g., revenue analysis, room utilization)

---

## Project Goals and Scope

### Objective
To transform LRCH’s legacy information system into a modern, relational database system that improves patient care, enhances financial transparency, and supports strategic decision-making.

### Functional Scope
1. **Patient Management**: Enable clerks to search, update, and archive patient records efficiently.
2. **Billing and Financial Tracking**: Streamline billing processes and generate accurate financial reports.
3. **Treatment Tracking**: Manage detailed treatment records, prescriptions, and associated costs.
4. **Operational Insights**: Generate reports on room utilization, physician-patient interactions, and daily revenue.

---

## Technical Architecture

### Database Design
The database was designed using a **3NF normalized relational schema**, ensuring data integrity and efficient query performance. Key tables include:
- **Patients**: Tracks personal and contact information.
- **Admissions**: Records patient admissions and bed allocations.
- **Transactions**: Logs billing details with cost centers.
- **Treatments**: Captures treatment and prescription data.

### Views and Stored Procedures
- **Custom Views**:
  - `Daily_Revenue_Report`: Summarizes charges by patient and date.
  - `Room_Utilization_Report`: Displays room and bed occupancy data.
- **Stored Procedures**:
  - `CalculateTotalCharges`: Computes total charges for a patient.
  - `GetCurrentPatients`: Retrieves active patients by physician and bed.
  - `GetPatientAppointments`: Lists appointments for a patient.

### Reporting and Analysis
Reports such as **Physician-Patient Relationships**, **Billing Summaries**, and **Financial Analysis by Cost Center** were designed to support hospital operations and compliance requirements.

---

## Development Process

### Team Collaboration
This project was completed in a team of four, where I contributed significantly to database schema design, implementation of stored procedures, and report generation. We adhered to Agile principles, holding weekly sprints to ensure steady progress.

### Challenges and Solutions
- **Complex Relationships**:
  Managed intricate relationships (e.g., multi-key primary relationships in admissions) using carefully designed ER diagrams and constraints.
- **Performance Optimization**:
  Employed indexing, optimized queries, and connection pooling to ensure fast data retrieval for large datasets.
- **Data Integrity**:
  Enforced constraints and triggers to maintain consistency across tables.

### Testing Strategy
- **Unit Testing**: Validated individual stored procedures and views.
- **Integration Testing**: Ensured seamless interaction between entities.
- **Performance Testing**: Optimized query execution times for reports.

---

## Results and Achievements

### Business Impact
- **Operational Efficiency**: Reduced data retrieval times for patient records and financial summaries.
- **Scalability**: Designed a system capable of supporting LRCH’s expansion plans.
- **Compliance**: Ensured adherence to healthcare regulations for data management and security.

### Metrics
- **Database Size**: ~25 relational tables with normalized structures.
- **Performance**: Average query execution time <200ms for large datasets.
- **Data Accuracy**: Achieved 100% accuracy in financial reports during testing.

---

## Lessons Learned and Future Enhancements

### Lessons Learned
1. **Importance of Normalization**: Simplified data handling and ensured scalability.
2. **Team Dynamics**: Effective communication and task distribution led to a cohesive project outcome.
3. **Advanced SQL**: Mastery of views, stored procedures, and indexing significantly improved system efficiency.

### Future Enhancements
- **Real-Time Dashboards**: Add live data visualization for administrators.
- **Integration with EHR Systems**: Seamless connectivity with electronic health record systems.
- **Advanced Analytics**: Implement predictive analytics for patient outcomes and financial forecasting.

---

## Conclusion

The **Hospital Database Management System** provides a solid framework for modernizing hospital operations while paving the way for future advancements in healthcare IT.
