# Landing banner BP Mobile test

1. *GitHub repository*: https://github.com/OlegWeremyew/bp-mobile
2. *GitHub-Pages*: https://olegweremyew.github.io/bp-mobile

## Tools:

This landing banner was made using:

1. **HTML**.
2. **SCC/SCSS**.
3. **Vanilla JavaScript**.
4. **Gulp**.

## Start locally:

1. Use "npm install" or "npm i" to install all the dependencies.
2. Use "gulp" to build the project.
3. Use "gulp deploy" to host the project on GitHub-Pages.

After starting the project, you will see the page rendered below, in the appropriate language.

[![landing-banner-bp-mobile-png-png.png](https://i.postimg.cc/7hypBtzK/landing-banner-bp-mobile-png-png.png)](https://postimg.cc/S2DTRrD9)

## Working principle:

Implemented the ability to determine the user's language and provide him with content of the appropriate purpose (in
total, 7 languages are available). When entering parameters into the query string (for example: "/?lang=ru" ), the
query parameter will take precedence over the user's language setting.

If incorrect parameters are entered on the query string and the user's language settings do not correspond to any of the
7 available languages, the user will be provided with content in the "eng" language format. This language is set as
default.

Depending on the choice of the active block "Monthly" or "Annually", the redirect address will change after clicking on
the "Continue" button, you will be taken to the corresponding site.

#### Connect with me:

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-informational?style=flat&logo=linkedin&logoColor=white&color=0D76A8)](https://www.linkedin.com/in/olegweremyev/)
[![Telegram Badge](https://img.shields.io/badge/Telegram-informational?style=flat&logo=telegram&logoColor=white&color=0D76A8)](https://t.me/olegwerem)
