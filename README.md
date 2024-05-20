.gitignore is generated when you generate a project, and it contains the line that excludes the node_modules repository from being pushed.

This is done because the folder can be very heavy (several hundreds of Mb), and it would cause your pushes to be very long, and not up-to-date with your semver.

If other users want to run your project locally, they will have to run npm i before ng serve. That's widely accepted as a standard.

1.clone your repository
2.run "npm -i"
3.ng serve

happy coding
