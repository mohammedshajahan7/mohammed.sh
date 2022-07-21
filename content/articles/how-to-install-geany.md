+++
title = "How to Install Geany"
thumbnail = "/images/geany.png"
date = 2022-02-19T00:51:37+05:30
draft = false
author = "Mohammed"
tags = ["Linux", "IDE", "Programing"]
+++

Geany is a lightweight IDE (Integrated Development Environment) using the GTK2 toolkit. It was developed to provide a small and faster IDE for users for editing files. Geany has few of dependencies from other packages so its easier to install. AS Geany only uses GTK2 toolkit and therefore you need only the GTK2 runtime libraries to run.

## Features
1. Syntax highlighting
2. Code completion
3. Auto completion of constructs
4. Geany supported filetypes like C, Java, PHP, HTML, Python, Perl, Pascal
5. symbol lists
6. and many [more…](https://www.geany.org/about/geany/)

## Geany install using Terminal
Geany is available under default Ubuntu repositories. To install most recent version, you need to configure ppa of Geany to your system. Run the following command to configure Geany PPA on Ubuntu:

{{< code lang="language-bash" index="line-numbers" >}}
    sudo add-apt-repository ppa:geany-dev/ppa
    sudo apt-get update
{{< /code >}}

## Then install Geany on Ubuntu
{{< code lang="language-bash" index="line-numbers" >}}
    sudo apt-get install geany geany-plugins-common
{{< /code >}}

## Launch Geany IDE

To start Geany IDE go to dashboard home search box and type “Geany”, click the Geany launcher icon

### Downlod Geany deb File
{{< button text="Download" url="http://ports.ubuntu.com/pool/universe/g/geany/geany_1.36-1build1_arm64.deb" >}}