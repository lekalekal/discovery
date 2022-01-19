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


