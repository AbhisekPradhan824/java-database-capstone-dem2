# User Story Template

**Title:**
_As a [user role], I want [feature/goal], so that [reason]._

**Acceptance Criteria:**
1. [Criteria 1]
2. [Criteria 2]
3. [Criteria 3]

**Priority:** [High/Medium/Low]
**Story Points:** [Estimated Effort in Points]
**Notes:**
- [Additional information or edge cases]

  # User Story Template

**Title: User Story 1**
_As an admin, I want to log into the portal with my username and password, so that I can manage the platform securely._

**Acceptance Criteria:**
1. Admin can enter username and password on the login screen.
2. System validates credentials against stored user data.
3. Successful authentication grants access to administrative portal features.

**Priority:** High
**Story Points:** 3
**Notes:**
- Must handle invalid credentials securely without revealing sensitive errors.


**Title: User Story 2**
_As an admin, I want to log out of the portal, so that I can protect system access._

**Acceptance Criteria:**
1. Admin can click a logout button from any page in the portal.
2. System terminates active session token immediately upon logout.
3. User is redirected back to the login page.

**Priority:** Medium
**Story Points:** 1
**Notes:**
- Ensure browser back button does not re-entry cached admin screens post-logout.

 

**Title:  User Story 3**
_As an admin, I want to add doctors to the portal, so that they can be available in the system for patient care._

**Acceptance Criteria:**
1. Admin can navigate to a form to add a new doctor's details (name, specialty, contact details).
2. System validates mandatory fields before saving.
3. New doctor record is created successfully and displayed in the doctor list.

**Priority:** High
**Story Points:** 5
**Notes:**
- Check for duplicate entries by email or identification number.

 

**Title:  User Story 4**
_As an admin, I want to delete a doctor's profile from the portal, so that inactive or former staff are removed from the system._

**Acceptance Criteria:**
1. Admin can view a list of doctors and select an option to delete a profile.
2. System displays a confirmation dialog before completing deletion.
3. Doctor record is removed or marked inactive in the portal database.

**Priority:** Medium
**Story Points:** 3
**Notes:**
- Handle edge cases where a doctor has active scheduled appointments.

 

**Title: User Story 5**
_As an admin, I want to run a stored procedure in MySQL CLI to get the number of appointments per month, so that I can track usage statistics._

**Acceptance Criteria:**
1. Stored procedure exists in MySQL database to query appointments grouped by month.
2. Executing procedure via MySQL CLI returns accurate monthly count statistics.
3. Admin can retrieve output for usage reporting.

**Priority:** Low
**Story Points:** 3
**Notes:**
- Ensure appropriate database execute permissions are granted to the admin DB user.

  # User Story 6: View Doctor List
**Title:**
_As a patient, I want to view a list of doctors without logging in, so that I can explore options before registering._

**Acceptance Criteria:**
1. Unauthenticated users can access the doctor directory page.
2. Doctor names, specialties, and profiles are publicly viewable.
3. Call-to-action buttons prompt users to register/log in to book an appointment.

**Priority:** High
**Story Points:** 2
**Notes:**
- Hide sensitive doctor contact details from public view.

---

# User Story 7: Patient Registration
**Title:**
_As a patient, I want to sign up using my email and password, so that I can book appointments._

**Acceptance Criteria:**
1. Patient can fill out a registration form with email and password.
2. System validates email format and password strength requirements.
3. System creates the user account and logs the patient in or requests email verification.

**Priority:** High
**Story Points:** 3
**Notes:**
- Prevent duplicate account creation with the same email.

---

# User Story 8: Patient Login
**Title:**
_As a patient, I want to log into the portal, so that I can manage my bookings._

**Acceptance Criteria:**
1. Patient can enter email and password on the login screen.
2. System authenticates credentials and grants access to patient portal features.
3. Patient is directed to their personal dashboard upon successful login.

**Priority:** High
**Story Points:** 2
**Notes:**
- Provide a clear error message for incorrect credentials.

---

# User Story 9: Patient Logout
**Title:**
_As a patient, I want to log out of the portal, so that I can secure my account._

**Acceptance Criteria:**
1. Patient can click a logout button from any authenticated screen.
2. System invalidates the user's active session immediately.
3. Patient is redirected to the public home or login page.

**Priority:** Medium
**Story Points:** 1
**Notes:**
- Clear session storage and auth cookies on logout.

---

# User Story 10: Book Appointment
**Title:**
_As a patient, I want to log in and book an hour-long appointment, so that I can consult with a doctor._

**Acceptance Criteria:**
1. Logged-in patient can select an available doctor, date, and 1-hour time slot.
2. System reserves the slot and confirms the appointment booking.
3. Confirmation details are displayed and saved under patient appointments.

**Priority:** High
**Story Points:** 5
**Notes:**
- Prevent double-booking for the selected doctor during that 1-hour interval.

---

# User Story 11: View Upcoming Appointments
**Title:**
_As a patient, I want to view my upcoming appointments, so that I can prepare accordingly._

**Acceptance Criteria:**
1. Logged-in patient can access an "Upcoming Appointments" section in their dashboard.
2. List shows doctor name, date, time, and appointment status.
3. Appointments are sorted chronologically by upcoming date.

**Priority:** Medium
**Story Points:** 2
**Notes:**
- Include option to cancel or reschedule if enabled by system rules.

  # User Story 12: Doctor Login
**Title:**
_As a doctor, I want to log into the portal, so that I can manage my appointments._

**Acceptance Criteria:**
1. Doctor can enter credentials on the login screen.
2. System validates doctor authentication and permissions.
3. Doctor is redirected to their specific dashboard upon successful login.

**Priority:** High
**Story Points:** 2
**Notes:**
- Ensure role-based access control restricts non-doctor users from accessing doctor views.

---

# User Story 13: Doctor Logout
**Title:**
_As a doctor, I want to log out of the portal, so that I can protect my data._

**Acceptance Criteria:**
1. Doctor can select the logout option from any page in the portal.
2. System terminates active session token immediately.
3. Doctor is redirected back to the login screen.

**Priority:** Medium
**Story Points:** 1
**Notes:**
- Automatically log out doctor after period of inactivity to secure sensitive medical data.

---

# User Story 14: View Appointment Calendar
**Title:**
_As a doctor, I want to view my appointment calendar, so that I can stay organized._

**Acceptance Criteria:**
1. Doctor can view a daily/weekly/monthly calendar view of scheduled appointments.
2. Appointments display patient name, appointment time, and status.
3. Doctor can click on a scheduled slot to view additional details.

**Priority:** High
**Story Points:** 3
**Notes:**
- Include filter options to toggle between completed, upcoming, or canceled appointments.

---

# User Story 15: Mark Unavailability
**Title:**
_As a doctor, I want to mark my unavailability, so that patients are informed only of my available slots._

**Acceptance Criteria:**
1. Doctor can select specific dates or time ranges on their calendar to mark as unavailable/blocked.
2. System updates schedule dynamically to prevent patients from booking during blocked hours.
3. System prompts confirmation before saving schedule changes.

**Priority:** High
**Story Points:** 5
**Notes:**
- Warn doctor if blocking time conflicts with already booked patient appointments.

---

# User Story 16: Update Profile
**Title:**
_As a doctor, I want to update my profile with specialization and contact information, so that patients have up-to-date information._

**Acceptance Criteria:**
1. Doctor can edit fields such as specialization, bio, phone number, and contact email.
2. System validates input data formats and saves changes.
3. Updated details are immediately reflected on the public and patient doctor directory.

**Priority:** Medium
**Story Points:** 3
**Notes:**
- Require admin approval for critical profile changes if required by system policy.

---

# User Story 17: View Patient Details
**Title:**
_As a doctor, I want to view the patient details for upcoming appointments, so that I can be prepared._

**Acceptance Criteria:**
1. Doctor can select an upcoming appointment from their calendar or schedule list.
2. System displays relevant patient details (e.g., patient name, age, reason for visit).
3. Access to patient details is restricted strictly to the doctor assigned to that appointment.

**Priority:** High
**Story Points:** 3
**Notes:**
- Ensure data privacy compliance (e.g., HIPAA) when retrieving patient records.

  

  
