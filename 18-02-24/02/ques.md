In this coding challenge, you will be implementing a function called `joinElementsWithUnderscore(array)` that takes an array as input and returns a string. The returned string should consist of all the array elements joined by an underscore `_`.

## Instructions

* If the input array is empty, return an empty string.

## Example test cases

<pre><div><code class="language-js"><span class="token">const</span><span> array </span><span class="token">=</span><span></span><span class="token">[</span><span class="token">'apple'</span><span class="token">,</span><span></span><span class="token">'banana'</span><span class="token">,</span><span></span><span class="token">'orange'</span><span class="token">,</span><span></span><span class="token">'grape'</span><span class="token">]</span><span class="token">;</span><span>
</span><span></span><span class="token">const</span><span> joinedString </span><span class="token">=</span><span></span><span class="token">joinElementsWithUnderscore</span><span class="token">(</span><span>array</span><span class="token">)</span><span class="token">;</span><span>
</span><span></span><span class="token">console</span><span class="token">.</span><span class="token method property-access">log</span><span class="token">(</span><span>joinedString</span><span class="token">)</span><span class="token">;</span><span></span><span class="token">// Output: 'apple_banana_orange_grape'</span></code></div></pre>

## Hints

* You can create a new string, loop over the input `array` and append the current element to it with the `_` separator.
* You can use the built-in method `.join()` method with `_` as the argument.
