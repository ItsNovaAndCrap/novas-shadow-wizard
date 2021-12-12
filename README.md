# Nova's Shadows

***Nova's Shadows*** is a NPM package for everything shadows.

Right now, Nova's Shadows only support shadows for images.
Support for text shadows will be coming soon.

## Changelog

### **v1.0.0** - The First Update For Nova's Shadows.

Added support for NPM and created main module.

## Installation

NPM: `npm install novas-shadows --save`

### **Template**

```
import { novas-shadow-wizard } from 'novas-shadows';

novas-shadow-wizard({
    shadow_type: 'soft',
    padding: false
});
```

### *Current Arguments Available*

**Nova's Shadows** currently supports 2 arguments for its wizard. Both of which are optional.

* *shadow_type* - _hard / soft_ (Defaults to soft)
* *padding* - _boolean_ (Defaults to false)