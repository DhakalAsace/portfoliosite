# Student Mark Tracking System  

## Project Overview  

The **Student Mark Tracking System** is a robust web application that streamlines academic progress tracking and mark management at Durham College. Built with Java EE and modern web technologies, this system emphasizes security, scalability, and user experience.

This comprehensive project, developed over one semester, demonstrates full software development lifecycle implementation. It features a three-tier architecture, secure database design, and responsive user interface. The system seamlessly integrates backend services with an intuitive frontend to deliver a reliable academic management solution.

---

## Key Highlights  

- **Technologies**: Java EE (Servlets, JSP), JDBC, PostgreSQL, Apache Tomcat  
- **Design Principles**: Three-tier MVC architecture, role-based access control (RBAC)  
- **Features**: Student profile management, course tracking, mark visualization, and secure authentication  
- **Security**: SHA-1 password hashing, input validation, session management, and XSS prevention  

---

## The Journey: Challenges and Solutions  

### Designing a Scalable Architecture  

The system needed to support multiple user roles (students and faculty) while maintaining a clear separation of concerns for scalability and maintainability.  

- **Solution**:  
  - Adopted a three-tier MVC architecture that divides the application into presentation, business logic, and data layers.  
  - Implemented inheritance in the model classes to differentiate roles while maintaining a shared codebase.  
  - Service classes enforced business rules, such as grade calculations and course enrollment.  

### Ensuring Data Integrity and Security  

As the application manages sensitive academic data, securing it from unauthorized access and data breaches was paramount.  

- **Solution**:  
  - Designed a normalized database schema with indexed tables for optimized queries and relationships.  
  - Secured user authentication with SHA-1 password hashing and RBAC for access control.  
  - Employed thorough input validation to prevent SQL injection and XSS attacks.  

### Building a Dynamic User Interface  

The interface had to be intuitive and visually consistent, supporting dynamic data rendering and error handling.  

- **Solution**:  
  - Developed JSP templates with JSTL for rendering dynamic content.  
  - Utilized shared CSS styles for consistency across pages.  
  - Enhanced the user experience with client-side validation complementing server-side checks.  

---

## System Architecture  

### Architectural Design  

The application follows the **three-tier MVC pattern**:  
1. **Model**: Represents business logic and data, implemented using Java classes for core entities such as Users, Students, Courses, and Marks.  
2. **View**: The presentation layer uses JSP for dynamic rendering with HTML5, CSS, and JavaScript.  
3. **Controller**: Handles request routing and business logic execution via Servlets.  

### Core Technologies  

- **Backend**: Java EE, JDBC  
- **Frontend**: JSP, HTML5, CSS, JavaScript  
- **Database**: PostgreSQL  
- **Server**: Apache Tomcat  

---

## Implementation Details  

### Database Design  

- Schema includes key tables such as `Users`, `Students`, `Courses`, and `Marks`.  
- Foreign key constraints enforce relationships between entities, ensuring referential integrity.  
- Indexing and normalization optimize performance for complex queries.  

### Business Logic  

- Encapsulated in service classes to centralize operations like grade calculations and enrollment validation.  
- Roles (Student, Faculty) inherit from a base `User` class, leveraging object-oriented design.  

### Security Measures  

- Passwords securely hashed with SHA-1.  
- Session management enforces secure user authentication.  
- Role-based access control ensures differentiated access.  
- Input sanitization prevents SQL injection and XSS attacks.  

### Presentation Layer  

- JSP templates with JSTL for dynamic content generation.  
- Shared CSS styles provide a consistent look and feel.  
- Error messages are user-friendly, hiding sensitive system details.  

---

## Testing and Validation  

### Testing Strategy  

- **Unit Testing**: DAO and service layers tested with mock databases.  
- **Integration Testing**: Validated workflows like login, grade submission, and profile updates.  
- **Security Testing**: Verified robustness of authentication and access control mechanisms.  

### Performance Optimization  

- Connection pooling for efficient database access.  
- Prepared statement caching reduces query parsing overhead.  
- Static resource caching improves page load times.  

---

## Deployment and Maintenance  

- Packaged as a WAR file and deployed on Apache Tomcat.  
- Version-controlled database migrations ensure consistency across environments.  
- Source control managed with Git, using a feature-branch workflow for streamlined collaboration.  

---

## Metrics and Achievements  

- **Codebase**: 1500+ lines of maintainable code.  
- **Code Coverage**: 90% test coverage across all layers.  
- **Performance**:  
  - Average response time: <200ms  
  - Average page load time: <1.5 seconds  

---

## Lessons Learned and Future Scope  

### Lessons Learned  

1. The importance of a clear separation of concerns in modular systems.  
2. Best practices for securing sensitive user data in web applications.  
3. Effective collaboration strategies for team-based software development.  

### Future Enhancements  

1. Implementing **real-time notifications** for grade updates.  
2. Adding **API endpoints** for mobile and third-party integration.  
3. Enhancing the **frontend UI** with modern frameworks like React or Angular.  
4. Introducing **analytics dashboards** for faculty to track student performance.  

---

## Conclusion  

The **Student Mark Tracking System** demonstrates practical implementation of software development practices. The project incorporates secure authentication, efficient database design, and user-friendly interfaces while meeting academic requirements.

This system serves as an example of applying full-stack development concepts, from database architecture to enterprise application deployment, within an educational context.
