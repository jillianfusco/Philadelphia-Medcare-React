import React from "react";

export default function Contact() {
    return(
        <section id="contact">
        <h1>Contact</h1>
        <form name="contact" method="POST" class="contact-form" data-netlify="true">
            <div class="form-group">
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name" name="first-name" required />
            </div>
            
            <div class="form-group">
                <label for="last-name">Last Name:</label>
                <input type="text" id="last-name" name="last-name" required />
            </div>

            <div class="form-group">
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />
            </div>
        
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
        
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
            </div>
        
            <div class="form-group">
                <label for="injury-description">Describe Your Injury and Reason for Reaching Out:</label><br />
                <textarea id="injury-description" name="injury-description" rows="4" required></textarea>
            </div>
        
            <button type="submit" class="btn btn-color-1">Submit</button>
        </form>
        
    </section>
    )
}