# My Remote Bootcamp Experience: Twitter Clone Group Project

After 6 weeks of intense learning, our cohort was split into small groups for our first group project. Our brief was short and vague; to build a twitter clone front end with a mobile first approach. We were expected to use git but the rest how we would manage the project was up too us as a team. This surprised me a little as learning more about project management was one of my key aims of the course. We were strongly encouraged to use kanban boards and issue tickets however.

## Breaking The Project Down into Tasks

As a group, we decided to breakdown the project into smaller components, and I suggested we used Figma as a tool to help us do this. Figma worked really well, I was quickly able to make a number of boards at different sizes and screen capture the necessary device renders with the firefox devtools. With Figma's multiplayer mode we we able to discuss the images together as a team without the hassle of having to bounce around each others discord streams, something we have be come far too aware of working remotely.

We added a COMPONENTS column to our kanban board started to create cards. We then listed the visual elements needed for each card and discussed functionality. Figma gave us what we wanted to in terms of being able to talk about the higher level components together, however it lacked any interactivity information and as we started to look at the site on our own devices the complexity grew. To temper the increased scope we added a NICE TO HAVE column to our project board.

## Adding CI/CD

After a little success deploying a small react app using github actions I was keen to further extend my CI/CD knowledge with this project. I created two actions; one to deploy to github actions on a merge to main and a to run eslint on creating a PR request. This took longer than I anticipated as I tripped over issues with creating the workflows. Once the linting was working I decided to park the deployment for now to start working on the components.

As the week went on, deployment was forgotten as other tasks took priority. This didn't really have too much of an impact on the project but in hindsight I wish I had got it running so that I could insure that new pull requests would pass the build step before being merge into main and that we all had one source of truth in regards to the visual aspects of our project.

## Git Issues

As expected, we had our fair share of issues with version control. We would often need to pull in important changes to our main branch to our local branches. We began using `git merge` to do this, but later learned that `git rebase` was cleaner and more effective for out needs. I also learnt that you could rebase a local branch from a previous commit allowing you to overwrite unnecessary commits that were not anticipated at the the time.

With the deadline looming, our best intensions for writing well thought out commit messages went out the window. I believe that is a discipline that is best improved over time, however, the biggest mistake was letting ourselves create the time pressure in the first place.

## Managing Scope and Feature Creep

While we were carful at the beginning of the week to set realistic expectations of what could be done, we ultimately failed at limiting feature creep and our goal of avoiding a frantic and stressful race to the finish line.

As we went through the week our aim was to have everything done on our project board by thursday and by wednesday it looked like that was possible. However, by leaving some of the features that were proving difficult to implement and moving on to other tickets we had created a time bomb for ourselves.

These little teaks soon piled up and as the more experienced of the group I tried to clear them. This also coincided with the other group members taking on extra functionality now the low hanging fruit had been completed.

A side effect of this was that they need more time from me to help them which slowed my progress at times.

I am really proud of what we achieved together as a group but we did find the final day stressful, something I how to avoid in future projects.
