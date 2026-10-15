/**
 * Renders the dynamic header component based on the current page context,
 * user role, and authentication token stored in localStorage.
 */
function renderHeader() {
    const headerDiv = document.getElementById("header");
    if (!headerDiv) return;

    // Check if the current page is the homepage; do not show the role-based header there
    if (window.location.pathname.endsWith("/")) {
        localStorage.removeItem("userRole");
        localStorage.removeItem("token");
        return;
    }

    // Look up the user's role and login token in localStorage
    const role = localStorage.getItem("userRole");
    const token = localStorage.getItem("token");

    // Check for invalid session or missing credentials
    if ((role === "loggedPatient" || role === "admin" || role === "doctor") && !token) {
        localStorage.removeItem("userRole");
        localStorage.removeItem("token");
        alert("Session expired or invalid login. Please log in again.");
        window.location.href = "/";
        return;
    }

    let headerContent = "";

    // Inject appropriate header HTML depending on user type
    if (role === "admin") {
        headerContent += `
            <div class="header-inner">
                <h2>Admin Control Panel</h2>
                <div class="nav-links">
                    <button id="addDocBtn" class="adminBtn" onclick="openModal('addDoctor')">Add Doctor</button>
                    <a href="#" onclick="logout()">Logout</a>
                </div>
            </div>
        `;
    } else if (role === "doctor") {
        headerContent += `
            <div class="header-inner">
                <h2>Doctor Portal</h2>
                <div class="nav-links">
                    <a href="/doctor/doctorDashboard.html">Home</a>
                    <a href="#" onclick="logout()">Logout</a>
                </div>
            </div>
        `;
    } else if (role === "patient") {
        headerContent += `
            <div class="header-inner">
                <h2>Clinic Patient Portal</h2>
                <div class="nav-links">
                    <button id="loginBtn" class="button" onclick="openModal('login')">Login</button>
                    <button id="signupBtn" class="button" onclick="openModal('signup')">Sign Up</button>
                </div>
            </div>
        `;
    } else if (role === "loggedPatient") {
        headerContent += `
            <div class="header-inner">
                <h2>Patient Dashboard</h2>
                <div class="nav-links">
                    <a href="/patient/patientDashboard.html">Home</a>
                    <a href="/patient/appointments.html">Appointments</a>
                    <a href="#" onclick="logoutPatient()">Logout</a>
                </div>
            </div>
        `;
    }

    // Finalize header injection into the DOM
    headerDiv.innerHTML = headerContent;
    attachHeaderButtonListeners();
}

/**
 * Attaches event listeners dynamically to elements rendered inside the header.
 */
function attachHeaderButtonListeners() {
    const addDocBtn = document.getElementById("addDocBtn");
    if (addDocBtn) {
        addDocBtn.addEventListener("click", () => {
            // Modal trigger handled via inline or listener
        });
    }
}

/**
 * Clears session tokens and redirects back to the homepage.
 */
function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    window.location.href = "/";
}

/**
 * Clears patient session token and resets role back to standard patient view.
 */
function logoutPatient() {
    localStorage.removeItem("token");
    localStorage.setItem("userRole", "patient");
    window.location.href = "/patient/patientDashboard.html";
}

// Automatically execute header rendering when DOM content is loaded
document.addEventListener("DOMContentLoaded", renderHeader);