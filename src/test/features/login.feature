Feature: User Authentication tests

    Background:
        Given User navigates to the application
        
    Scenario: Login should be success
        And User enter the username as "audiocare"
        And User enter the password as "[Acs2011029999]"
        When User click on the login button
        Then Login should be success



    
    Scenario: Login should be failed
        And User enter the username as "ymankoulah"
        And User enter the password as "[Acs2011029999]"
        When User click on the login button
        But Login should fail

        Examples:
            | username     | password        |
            | ymankoulah   | [Acs2011029999] |
            | audiocare    | [Acs20029999]   |
            | ymankoulah   | [Acs2011029999] |
    
