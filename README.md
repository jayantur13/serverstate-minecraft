<p align="center">
  <img alt="Logo" src="https://i.postimg.cc/mDjCTfyJ/minecraft.png">
  <p align="center">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/jayantur13/serverstate-minecraft?label=codecov&logo=codecov&style=flat-square">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/jayantur13/serverstate-minecraft/test.yml?branch=master">
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
- srvType - Pass server type _java_ for Java Edition and _bedrock_ for Bedrock edition.

**Optional parameters for banner:**

Following parameters can be used for customisation -

- borderColor - pass a border color (or transparent)
- fontWeight - pass normal/bold/bolder/lighter or 100-900
- bgColor - pass background color
- txtColor - pass text color
- headingColor - pass heading color
- iconColor - pass an icon color (or transparent)
- themeval - pass an available theme name

> Note1: Color must be passed starting with %23 (encoded value for #)
>
> > Note2: Customise all parameters or use theme instead (i.e themeval)
>
> > Note3: There is **1 min. cache time** for now,set by default
>
> > Note4: Possible to skip some optional parameters

## Examples

You can use **markdown** or **img** to render minecraft server state

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
https://serverstate-minecraft.vercel.app/api?srvAddress=pokecentral.org&srvType=java&themeval=cobalt&borderColor=%23ffffff&fontWeight=bold
```

<h4>Themes Demo</h4>

![ServerState Minecraft](https://serverstate-minecraft.vercel.app/api?srvAddress=play.primegames.net&srvType=bedrock&themeval=yeblu)

![ServerState Minecraft](https://serverstate-minecraft.vercel.app/api?srvAddress=ms.pixelmonrealms.com&srvType=java&themeval=panda)

Checkout themes in [All themes](https://github.com/jayantur13/tree/main/src/themes.json "All Themes") or you can get an idea of how themes may look [Theme Demo courtesy Anurag Hazra](https://github.com/anuraghazra/github-readme-stats/tree/master/themes "Theme Demo Here")

## Changelog

For all the important changelog vist [Changelog](https://github.com/jayantur13/serverstate-minecraft/blob/master/CHANGELOG.md)

## References

- [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- [ABSphreak/readme-jokes](https://github.com/ABSphreak/readme-jokes)
- [DenverCoder1/github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)
- [Minecraft API by Jacob Gunther](https://mcstatus.io/)

## Contributing

Contributions are always welcome!

See [Contributing](https://github.com/jayantur13/serverstate-minecraft/blob/master/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [Code Of Conduct](https://github.com/jayantur13/serverstate-minecraft/blob/master/CODE_OF_CONDUCT.md).

## Support

Support the developers for this project to live long.For issues, open a new issue or use discussion.

## License

This project is licensed under the [MIT License](https://github.com/jayantur13/serverstate-minecraft/blob/master/LICENSE)
