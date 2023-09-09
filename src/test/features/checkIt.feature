Feature: Generate the qr code

    Background:
        Given User navigates to the application
        And User enter the username as "audiocare"
        And User enter the password as "[Acs2011029999]"
        When User click on the login button
        
    Scenario: Generate QR code
        When User click on the generate qr code button
        Then User should enter the sitename
        And User should enter the serial number
        And User should choose the site type
        And User should click on the generate qr code button
        Then User should see the qr code image

    Scenario: Go to each site
        Then User will choose a site from the dashboard
        And print the qr code

    Scenario: Search for the site
        Then User will search for a site from the dashboard
    
    Scenario: Log out from the website
        And click logout
        Then User will be redirected to the login page




        