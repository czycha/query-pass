# jQuery.queryPass

Passes certain query parameters to links. Requires jQuery.

## Syntax

```js
$(element).queryPass(keys, override);
```

- **keys** – Array of query params to take from the current URL and apply to the element. Ignores keys it can't find.
- **override** – If key exists in link's query, replace it. **Default: false.**

## Example

On `localhost:3000/?utm_content=1&utm_campaign=2&utm_source=3&utm_medium=4&someotherthing=5`...

```html
<a href="http://google.com/?uselessparam=1&utm_content=heyialreadyhadthis" class="query-pass--utm">I feel different</a>

<script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script type="text/javascript" src="/js/query-pass.min.js"></script>

<script type="text/javascript">
$(function() {
  $('a.query-pass--utm').queryPass(['utm_content', 'utm_campaign', 'utm_source', 'utm_medium']);
});
</script>
```

`.query-pass--utm`'s URL changed to `http://google.com/?uselessparama&utm_content=heyialreadyhadthis&utm_campaign=2&utm_source=3&utm_medium=4`.
