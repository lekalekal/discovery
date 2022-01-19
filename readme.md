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
