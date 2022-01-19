# Discovery!

## Sélecteurs
**:marker**

Le pseudo-élément **`::marker`** représente le marqueur d'un élément d'une liste (par exemple la puce ou le numéro de l'élément d'un élément [`<li>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/li)). Ce pseudo-élément ne fonctionne que pour les éléments ou pseudo-éléments pour lesquels [`display`](https://developer.mozilla.org/fr/docs/Web/CSS/display) vaut `list-item` (par défaut c'est le cas des éléments [`<li>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/li) et [`<summary>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/summary)).

![enter image description here](https://github.com/lekalekal/discovery/blob/main/1.jpg?raw=true)

[DEMO](http://cepegra-labs.be/webdesign/fed2021/rostislav/discovery/marker.html)

  

## Propriétés  

**flex-grow/flex-shrink/flex-basis**
Supporté partout.

flex-grow

La propriété CSS **`flex-grow`** définit le facteur d'expansion d'un élément flexible selon sa dimension principale. Elle indique la quantité d'espace restant que l'élément devrait consommer dans un conteneur flexible relativement à la taille des autres éléments du même conteneur.

flex-shrink

La propriété **`flex-shrink`** définit le facteur de rétrécissement d'un élément flexible. Si la taille de l'ensemble des éléments flexibles est supérieure à la taille du conteneur, les éléments seront comprimés selon leur facteur `flex-shrink`.

flex-basis

La propriété **`flex-basis`** détermine la base de flexibilité utilisée comme taille initiale principale pour un élément flexible. Cette propriété détermine la taille de la boîte de contenu sauf si une autre boîte est visée par [`box-sizing`](https://developer.mozilla.org/fr/docs/Web/CSS/box-sizing).

[DEMO](http://cepegra-labs.be/webdesign/fed2021/rostislav/discovery/flex.html)

---

# image-rendering
La propriété **`image-rendering`** fournit une indication au navigateur à propos de l'algorithme qui devrait être utilisé pour redimensionner les images.

Par défaut, chaque navigateur va tenter d'appliquer de l'aliasing à une image redimensionnée, ce qui peut être un soucis si on veut garder l'aspect pixelisé d'une image (important pour les QR codes par exemple).

**exemple**
```css
img {
	image-rendering: auto;
	image-rendering: crisp-edges;
	image-rendering: pixelated;
}
```

- **crisp-edges** va préserver les couleurs et le contraste de l'image sans la rendre trouble.
- **pixelated** va préserver le look pixelisé en se basant sur les pixels adjacent. cette propriété ne s'applique qu'aux images qui sont agrandies. 

**demo:** http://cepegra-labs.be/webdesign/fed2021/pierrede/property/image-rendering/

### Compatibilité
![enter image description here](https://cdn.discordapp.com/attachments/895668688441704500/933286953787482122/unknown.png)


# `<picture> & <source>`

Le conteneur html  `<picture>`  permet au navigateur de choisir différentes sources pour une balise img. 
Le navigateur choisira la source la plus pertinente selon la disposition de la page, de l'appareil utilisé et selon les formats pris en charge. Son utilisation principale est dans un but responsive.

L'élément `<source>` définit différentes ressources média pour un élément  `<picture>`  `<audio>` ou  `<video>`.

**exemple**
```html
<picture>  
	<source media="(min-width:650px)"  srcset="img_pink_flowers.jpg">  
	<source media="(min-width:465px)"  srcset="img_white_flower.jpg">  
	<img src="img_orange_flowers.jpg"  alt="Flowers"  style="width:auto;">  
</picture>
```

Le navigateur va chercher le premier élément `<source>` qui correspond à la valeur viewport width actuelle.
La balise img est utilisée en last-child afin d'assurer une source si aucune des valeurs **media** ne correspond.

**demo:** http://cepegra-labs.be/webdesign/fed2021/pierrede/property/picture_source/

### Compatibilité

**picture**
![enter image description here](https://cdn.discordapp.com/attachments/895668688441704500/933291336336031764/unknown.png)

**source**![enter image description here](https://cdn.discordapp.com/attachments/895668688441704500/933294742291243049/unknown.png)

# :not

La propriété CSS **`:not`** permet de cibler les éléments qui ne sont pas resprésentés par l'argument qu'on lui assigne.

**exemples**
```css
/* Sélectionne n'importe quel élément qui n'est */
/* pas un paragraphe */
:not(p) {
  color: blue;
}

/* Contient tous les paragraphes (p) sauf
   ceux avec le sélecteur de class "classy" */
p:not(.classy) {
  color: red;
}

/* Les éléments qui ne sont pas des paragraphes */
/* et qui n'ont pas la classe "classy" */
/* Note : cette syntaxe n'est pas bien supportée */
body :not(.classy, p) {
  font-family: sans-serif;
}
```
**demo:** http://cepegra-labs.be/webdesign/fed2021/pierrede/property/not/

### Compatibilité![enter image description here](https://cdn.discordapp.com/attachments/895668688441704500/933331132299214918/unknown.png)



---


### 1. mix-blend-mode
Permet à un élément de filtrer le `background` d'une certaine manière (par exemple en prenant le négatif de l'image)

Valeur par défaut : `normal` (affiche la couleur de l'élément)
Autres valeurs possibles : `multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity` 

### 2. mask
Mask permet de masquer une partie d'une image avec une autre image. C'est un peu comme si on rognait ou découpait l'image, sauf qu'au lieu de simplement dire à une partie de l'image "disparais" on dit à chaque pixel de devenir plus ou moins transparent.

#### mask-image
Fonctionne comme `background-image`
#### mask-position
Fonctionne comme `background-position`
#### mask-repeat
Fonctionne comme `background-repeat`
#### mask-size
Fonctionne comme `background-size`
#### mask-mode
Sélectionne le type de masque, basé sur la luminosité de l'image (noir → blanc) ou sur l'alpha de l'image (transparent → opaque)
Valeurs par défaut : `match-source`
Valeurs possibles : `match-source|luminance|alpha|initial|inherit`
#### mask-type
Fait la même chose que `mask-mode` mais en moins bien (on a juste le choix entre `luminance|alpha`. À ne pas utiliser.
#### mask-origin
Définit le positionnement du masque à l'origine de l'image (normalement en haut à gauche.
Valeurs possibles: `content-box|padding-box|border-boxmargin-box|fill-box|stroke-box|view-box`
#### mask-border
Définit une image comme bord (l'image se répète tout le long du bord d'une autre image). C'est une propriété composée de plusieurs sous-propriétés : 

 - L'image source
 - La taille de la zone dans laquelle l'image se place
 - Les dimensions de l'image elle-même
 - Le mode de masquage (voir mask-mode)
 - etc.

#### mask-composite
> /!\ Ne fonctionne que sur Firefox !!!

Permet de sélectionner plusieurs masques différents et les faire interagir l'un avec l'autre.
Valeurs possibles `add|subtract|intersect|exclude`

#### mask-clip
Permet d'ajuster le 'box-sizing' de l'image masquante.
Valeurs possibles : `content-box|padding-box|border-box|margin-box|fill-box|stroke-box|view-box|no-clip`

#### mask
La propriété `mask` est le raccourci pour spécifier toutes les propriétés `mask-`, de la même manière que `background` est la propriété pour `background-image`, `background-position`, etc.
L'ordre des informations à mettre dans `mask` :
`mask-mode|mask-position|mask-size|mask-repeat|mask-origin|mask-clip|mask-composite` 
Par exemple :
`mask: url(mask.png)  50%  50%  / contain no-repeat border-box luminance;`

