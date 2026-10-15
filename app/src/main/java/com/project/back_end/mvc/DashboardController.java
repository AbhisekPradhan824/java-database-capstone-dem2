package com.project.back_end.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Map;

@Controller
public class DashboardController {

    @Autowired
    private TokenService tokenService;

    /**
     * Handles requests to the admin dashboard.
     * Validates the token and admin role, returning the view or redirecting to login.
     */
    @GetMapping("/adminDashboard/{token}")
    public String adminDashboard(@PathVariable("token") String token) {
        Map<String, Object> validationResult = tokenService.validateToken(token, "admin");
        
        if (validationResult != null && validationResult.isEmpty()) {
            return "admin/adminDashboard";
        }
        return "redirect:http://localhost:8080";
    }

    /**
     * Handles requests to the doctor dashboard.
     * Validates the token and doctor role, returning the view or redirecting to login.
     */
    @GetMapping("/doctorDashboard/{token}")
    public String doctorDashboard(@PathVariable("token") String token) {
        Map<String, Object> validationResult = tokenService.validateToken(token, "doctor");
        
        if (validationResult != null && validationResult.isEmpty()) {
            return "doctorDashboard";
        }
        return "redirect:http://localhost:8080";
    }
}