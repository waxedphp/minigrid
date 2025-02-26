<?php
namespace Waxedphp\Minigrid;

class Setter extends \Waxedphp\Waxedphp\Php\Setters\AbstractSetter {

  protected ?bool $empty = null;
  
  protected ?int $gutter = null;

  private array $items = [
  ];
  /**
   * @var array<mixed> $setup
   */
  private array $setup = [
  ];
  
  private int $width = 200;
  
  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
  'empty', 'gutter'
  ];

  function setWidth(int $value) {
    $this->width = $value;
    return $this;
  }

  function setRoute(string $value) {
    $this->route = $value;
    return $this;
  }

  function setEmpty() {
    $this->empty = true;
    return $this;
  }

  function clear() {
    $this->items = [];
    return $this;
  }
  
  function addFolder(string $dir, string $pattern = '*.{png,jpg,jpeg}') {
    $prevDir = getcwd();//"./*/*.{png,jpg,jpeg}"
    if (is_dir($dir)) {
      chdir($dir);
      //echo "DIR! " . $dir;
      foreach (glob($pattern, \GLOB_BRACE) as $filename) {
          //echo "$filename\n";
          $this->addImage($filename);
      }
      chdir($prevDir);
    } else {
      //echo "NOT DIR!";
    }
    return $this;
  }
  
  function addImage(string $filename) {
    $size = getimagesize($filename);
    $x = $this->width/$size[0];
    $d = [
      'image' => str_replace('{PATH}', $filename, $this->route),
      'width' => $this->width,
      'height' => round($size[1] * $x)
    ];
    $this->addItem($d);
  }

  function addItem(string|array $value) {
    $d = [];
    $allowed = [
      'html' => 'filter_var',
      'image' => 'filter_var',
      'background' => 'filter_var',
      'width' => 'intval',
      'height' => 'intval'
    ];
    if (is_string($value)) {
      $d['html'] = $value;
    } else if (is_array($value)) {
      foreach($value as $key => $val) {
        if (array_key_exists($key, $allowed)) {
          $fun = $allowed[$key];
          $d[$key] = $fun($val);
        };
      }
    };
    $this->items[] = $d;
    return $this;
  }

  function shuffle() {
    shuffle($this->items);
    return $this;
  }

  function random(int $num) {
    $num = min(count($this->items), $num);
    $nums = array_rand($this->items, $num);
    $d = [];
    foreach ($nums as $n) {
      $d[] = $this->items[$n];
    }
    $this->items = $d;
    return $this;
  }

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value = null): array {
    $a = [];
    $b = $this->getArrayOfAllowedOptions();
    if (!empty($b)) {
      $a['config'] = $b;
    }
    if (is_null($value)) {
      $a['value'] = $this->items;
    } else {
      $a['value'] = $value;
    }
    return $a;
  }

}
