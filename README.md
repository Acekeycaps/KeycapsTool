# 🫡 Welcome Aboard 

This is the handbook for all teammates to contribute this project more efficiently.

Once you lost, come back to checkout any helpful.

## Menu
- [Set up development environment](#set-up-development-environment)
- [Development Overview](#overview)

---

## Set up Development Environment

This project uses docker development contianer to make sure all teammates have the same development environment and system configuration.

**Tools:**

* Visual Studio Code
* Docker

**Important:**

please install `Dev Containers` plugin in the VSCode Extenstion Store.

After the `Dev Container` plugin has been installed and `Docker` has started, reopen `VSCode`. Then, click the `Reopen in Container` option to start your development environment.

Then you can use this cmd to start this project.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Overview

💡 Plan -> 💻 Implement <-> 🧪 Test -> 🎉 Done

## Before Coding

- **New Tickets**

    Planning is crucial. Discuss your estimated timeline and your idea for implementing the new requirements with your teammates once you assigned a ticket.

- **Package Management**

    If you want to install new packages, discuss your reasons with your teammates. Any new changes will undergo a code review.

- **Testing**

    In our small team, we usually discuss new requirements together and assign two members to each new requirement. One person is responsible for the test cases, and the other for implementation.

## Start Coding

- **Create a new branch**

    new branch name should be start with your name and end with the ticket name. 

    **e.g.** `chenhuafan/complete_readme`.

- **Development (TDD) and Test**
    
    In general, two developers are assigned to the same ticket, one as the Developer and another as the Tester.

    1. New Requirement Team Meetings (Target, Roles) 
    
        Discuss the target of the new requirement and the roles of the Developer and Tester.
    
    2. Test Case Creation

        The Tester will create a new development branch and start adding test cases.
    
    3. Implementation

        The Developer will follow all the test cases to implement the functions.
    
    4. Code Review and Merging

        Once all the functions are completed, please create a Pull Request (PR) and request a code review before merging into the Dev branch.

## To Contribute

- Once your PR passing code review and all auto test. your code will be merged into `Dev` branch. Then the ticket is **Done** 🎉.

---

