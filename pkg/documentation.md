# Minigrid

MIT license

[http://minigrid.js.org]


### Limitation

Minigrid was built having in mind "cards" with same width and different heights. If your cards have different width sizes or you need more power Minigrid might not be right for you.




### HTML:

```

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

### PHP:

```

$this->waxed->display([
  'payload' =>
  [
    'value' => null
  ],
], 'template');


```


