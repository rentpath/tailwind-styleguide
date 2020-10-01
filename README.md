# Windsock - A Tailwind Styleguide Builder

https://windsock.app

> ✨ Bootstrapped with Create Snowpack App (CSA).
> Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Tailwind is a powerful tool with some awesome out-of-the-box presets for spacings, colors, font sizes, box shadows, etc. But it's also highly configurable, and its documentation only references the built-in standards in its code samples.

Windsock was built after dealing one too many times with the frustration of cross-referencing the Tailwind docs with your project or organization's tailwind configuration file.

If you've ever found thinking something along the lines of...

> Why does px-24 not work? It says right here in the documentation it's valid. Oh wait, we defined a new spacing grid for our project that worked better for our designs. Okay so what spacings DO I have to work with?

Then Windsock is the tool for you.

_Windsocks are flags that can be used to visually show how the wind is blowing._

## Using the App

Simply upload your project's built Tailwind CSS file in the upload dialog on the app's splash page. Alternatively, you can use the default Tailwind config as a handy quick reference! Everything is handled client side, so you aren't actually sending anyone your CSS file. It's all parsed on your end.

## Integrating with your CI

Windsock is both a web app and an installable Node app. If your organization would like to integrate Windsock into your CI pipeline to have a statically hosted and always up-to-date reference for the developers in your organization, don't even sweat it. Windsock has it covered.

```sh
npm install -g windsock-cli
windsock build ./my-tailwind.css > ./styleguide.html
```

Windsock is under active development. Only a small fraction of Tailwind's massive surface area has been covered in the style guide builder. There are definitely bugs and edge cases to be uncovered. Contributions are always welcome.
