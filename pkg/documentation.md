# Minigrid

Minimal 2kb zero dependency cascading grid layout without pain.

[http://minigrid.js.org]

#### Limitation

Minigrid was built having in mind "cards" with same width and different heights. If your cards have different width sizes or you need more power Minigrid might not be right for you.

MIT license

---
### PHP:

```php
  use Waxedphp\Minigrid\Setter as Minigrid;
  
  $obj = new Minigrid($this->waxed);
  $obj->addItem(['html' => '<h1>Hello</h1>', 'height' => 400])
  ->clear()->setEmpty()
  ->setGutter(2)->setWidth(350);
  $obj->setRoute('/images/futuro/{PATH}')
  ->addFolder('/Collection/futuro')->random(30);
  
  $this->waxed->pick('section1')->display([
    'data' => [
      'payload1' => $obj->value(),
    ],
  ],$this->tpl.'/minigrid');


```
---

### HTML:

```html
<div class="cards waxed-minigrid">
  <div class="card" style="height:300px;width:200px;" ></div>
  <div class="card" style="height:400px;width:200px;" ></div>
  <div class="card" style="height:340px;width:200px;" ></div>
  <div class="card" style="height:300px;width:200px;" ></div>
  <div class="card" style="height:400px;width:200px;" ></div>
  <div class="card" style="height:340px;width:200px;" ></div>
  <div class="card" style="height:300px;width:200px;" ></div>
  <div class="card" style="height:400px;width:200px;" ></div>
  <div class="card" style="height:340px;width:200px;" ></div>
  <div class="card" style="height:300px;width:200px;" ></div>
  <div class="card" style="height:400px;width:200px;" ></div>
  <div class="card" style="height:340px;width:200px;" ></div>
</div>


```
---
---

### PHP methods:

```php

    $obj = new Minigrid($this->waxed);
    
    // clear already added items.
    $obj->clear();
    
    // clear added cards in browser.
    $obj->setEmpty();
    
    // adds one card.
    $obj->addItem(['html' => '<h1>Hello</h1>', 'height' => 400]);

    // sets gutter - margin between cards.
    $obj->setGutter(2);
    
    // sets width of generated cards. (Default 200)
    $obj->setWidth(350);
    
    // sets route for loading images.
    $obj->setRoute('/images/futuro/{PATH}');
    
    // create cards as images from folder.
    $obj->addFolder('/Collection/futuro');
    
    // shuffle cards
    $obj->shuffle();
    
    // select random cards in amount 30
    $obj->random(30);
    
    // returns values for frontend.
    $obj->value();
    
```
