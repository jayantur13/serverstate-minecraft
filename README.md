<p align="center">
  <img alt="Logo" src="https://i.postimg.cc/mDjCTfyJ/minecraft.png">
  <p align="center">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/jayantur13/serverstate-minecraft?label=codecov&logo=codecov&style=flat-square">
    <img alt="Code-style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/jayantur13/serverstate-minecraft/test.yml?branch=master">
    <a href="https://github.com/jayantur13/serverstate-minecraft/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/jayantur13/serverstate-minecraft?style=flat-square"></a>
    <a href="https://github.com/jayantur13/serverstate-minecraft/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/jayantur13/serverstate-minecraft?style=flat-square"></a>
    <a href="https://github.com/jayantur13/serverstate-minecraft/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/jayantur13/serverstate-minecraft?style=flat-square"></a>
    <h3 align="center"><b>Minecraft server state in your readme/signature.</b></h3>
  </p>
  <p align="center"><a href="#setup-guide">Setup Guide</a> • <a href="#examples">Examples</a> • <a href="#valid-format">Valid format</a> • <a href="#themes-demo">Theme demo</a> • <a href="#contributing">Contributing</a></p>
</p>

## Features

- Easy to setup and use
- Full customistaion
- Variety of themes
- Supports java and bedrock edition

## Setup Guide

Please read the following for an easy setup -

**Mandatory parameters for banner:**

These below,two parameters are must -

- srvAddress - Pass server address i.e _hostname_,_ip_,_ip:port_ or _name with domain_
- srvType - Pass server type _main_ for Java Edition and _bedrock_ for Bedrock edition.

**Optional parameters for banner:**

Following parameters can be used for customisation -

- borderColor - pass a border color (or transparent)
- fontWeight - pass normal/bold/bolder/lighter or 100-900
- bgColor - pass background color
- txtColor - pass text color
- headingColor - pass heading color
- iconColor - pass an icon color (or transparent)
- themeval - pass an available theme name

> Note1: Color must be passed starting with %23 (encoded for #)
>
> > Note2: Customise all parameters or use theme instead (i.e themeval)
>
> > Note3: There is **1 min. cache time** for now,set by default
>
> > Note4: Possible to skip some optional parameters

## Examples

You can use **markdown** or **img tag** to render minecraft server state

```
<!-- Markdown -->

![ServerState Minecraft](https://serverstate-minecraft.vercel.app/api?srvAddress=play.primegames.net&srvType=bedrock)

```

or

```
<!-- HTML -->

<img src="https://serverstate-minecraft.vercel.app/api?srvAddress=play.primegames.net&srvType=bedrock alt="ServerState Minecraft"/>

```

<h4>Valid Format</h4>

> If you don't want icon (iconColor),border (borderColor) and fontWeight just don't pass them in query

Default usage (i.e with _random themes_)

```
https://serverstate-minecraft.vercel.app/api?srvAddress=play.primegames.net&srvType=bedrock
```

With a theme

```
https://serverstate-minecraft.vercel.app/api?srvAddress=play.primegames.net&srvType=bedrock&themeval=omni
```

Full customisation

```
https://serverstate-minecraft.vercel.app/api?srvAddress=play.primegames.net&srvType=bedrock&borderColor=%23000000&fontWeight=bold&bgColor=%23ffffff&txtColor=%23000000&headingColor=%23000000&iconColor=%23000000
```

Customise theme with borderColor and fontWeight

```
https://serverstate-minecraft.vercel.app/api?srvAddress=play.primegames.net&srvType=bedrock&themeval=cobalt&borderColor=%23ffffff&fontWeight=bold
```

<h4>Themes Demo</h4>

![ServerState Minecraft](https://serverstate-minecraft.vercel.app/api?srvAddress=play.primegames.net&srvType=bedrock&themeval=yeblu)

![ServerState Minecraft](https://serverstate-minecraft.vercel.app/api?srvAddress=pokecentral.org&srvType=main&themeval=panda)

Checkout themes in [All themes](https://github.com/jayantur13/tree/main/src/themes.json "All Themes") or you can get an idea of how themes may look [Theme Demo courtesy Anurag Hazra](https://github.com/anuraghazra/github-readme-stats/tree/master/themes "Theme Demo Here")

## References/Source/Inspiration

- [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- [ABSphreak/readme-jokes](https://github.com/ABSphreak/readme-jokes)
- [DenverCoder1/github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)
- [Minecraft API by Anders G. Jørgensen](https://github.com/Spirit55555)

## Contributing

Contributions are always welcome!

See [Contributing.md](https://github.com/jayantur13/serverstate-minecraft/blob/master/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [Code Of Conduct](https://github.com/jayantur13/serverstate-minecraft/blob/master/CODE_OF_CONDUCT.md).

## Issues

None yet.

## Support the project

[Support the API](https://paypal.me/spirit55555) and [Support the Project](https://www.buymeacoffee.com/jayantur13v),for this project to live long.

## License

This project is licensed under [MIT License](https://github.com/jayantur13/serverstate-minecraft/blob/master/LICENSE)
