# Code

## Examples

```html
::title=Basic unstyled
<pre class="pre-unstyled"><code>class Foo
  def bar
    puts 'hi'
  end
end</code></pre>
```

```html
::title=Inline
<p>This is an example of a paragraph with <code>an inline code snippet</code> within it.</p>
```

```html
::title=Inline dark
<p>This is an example of a paragraph with <code class="inline-dark">a dark inline code snippet</code> within it.</p>
```

#### Styled Code
In order to show syntax-highlighted code, you will need to apply a language specific class to the code tag. For example, `.language-ruby`.

There are several languages already available (and others available from the [Prismjs.com](http://prismjs.com
) website), including:

* Markup
* CSS
* C-like
* JavaScript
* Java
* PHP
* CoffeeScript
* Sass
* Bash
* Python
* HTTP
* Ruby
* Go


```html
<pre><code class="language-ruby">class Foo
  def bar
    puts 'hi'
  end
end</code></pre>
```

```html
::title=Scrollable
<pre class="pre-scrollable"><code class="language-ruby">class Foo
  def bar
    puts 'hi'
  end

  def bar
    puts 'hi'
  end

  def bar
    puts 'hi'
  end

  def bar
    puts 'hi'
  end

  def bar
    puts 'hi'
  end

  def bar
    puts 'hi'
  end

  def bar
    puts 'hi'
  end
end</code></pre>
```

```html
::title=Terminal window
::description=You will need to follow the PrismJS installation instructions in the <a href="#code_styled">styled code</a> section.
<div class="terminal">
  <ul class="terminal-dots"><li/><li/><li/></ul>
  <pre><code class="language-ruby">class Foo
  def bar
    puts 'hi'
  end
end

class Bar
  def bar
    puts 'hi'
  end
end

class Baz
  def bar
    puts 'hi'
  end
end

class Bop
  def bar
    puts 'hi'
  end
end</code></pre>
</div>

```

## Installation & Usage

`npm install pivotal-ui --save`

`import * as Code from 'pivotal-ui/css/code';`