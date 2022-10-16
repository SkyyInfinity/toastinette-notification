# Toastinette Notification
<b>EN:</b> Toastinette Notification is a JavaScript library for make toast notifications for your own web apps.<br>
<b>FR:</b> Toastinette Notification est une librairie JavaScript pour créer des notifications toast pour vos applications web.

## Summary <br>
1. [Installation](#installation)
2. [Configuration](#configuration)

<hr>

## <a name="installation">1. Installation</a>
- <b>EN:</b> Toastinette is really easy to install if you are familiar with other JS libraries.<br>
<b>FR:</b> Toastinette est vraiment facile à installer si vous êtes familier aux autres librairie JS.<br><br>
<b>EN:</b> To start, get the Toastinette CSS and JS file available above.  Put these two files in your project and import them via the HTML tag `<link>` and `<script>`.<br>
<b>FR:</b> Pour commencer, procurez vous le fichier CSS et JS de Toastinette disponible plus haut. Mettre ces deux fichiers dans votre projet et importer les via la balise HTML `<link>` et `<script>`.<br>

```html
    <link rel="stylesheet" href="path/to/toastinette.min.css">
```
```html
    <script src="path/to/toastinette.min.js" type="module"></script>
```
- <b>EN:</b> Then, insert its small lines of code to call the toast.<br>
<b>FR:</b> Ensuite, insérez ses petites lignes de code pour appeler le toast.<br>
```html
    <script>
        import Toast from "path/to/toastinette.min.js";

        let toast = new Toastinette({
            message: 'My first notification.',
        });
    </script>
```

## 2. <a name="configuration">Configuration</a>
```
    title
        Required: No
        Type: string
        Default: -

    message
        Required: Yes
        Type: string
        Default: 'message'

    position
        Required: false
        Type: string
        Default: 'top-center'
        Values: 
            'top-left'
            'top-center'
            'top-right'
            'bottom-left'
            'bottom-center'
            'bottom-right'

    autoClose
        Required: false
        Type: number OR Boolean
        Default: -
        Values: 
            false
            number in ms (millisecond)
 
    type
        Required: false
        Type: string
        Default: 'success'
        Values
            'success'
            'error'
            'info'
            'warning'

    progress
        Required: false
        Type: boolean
        Default: -
        Values
            true
            false
```