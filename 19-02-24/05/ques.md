# Anagram checker

Write a function `areAnagrams(strOne, strTwo)`, which takes two strings: `strOne` and `strTwo` as arguments. The function should return `true` if the two strings are anagrams and false otherwise.

An *anagram* is a word or phrase formed by rearranging the letters of another word or phrase. In other words, two strings are considered anagrams if they have exactly the same characters but in a different order.

> **NOTE:** The function `areAnagrams` should be case-insensitive

### Example test cases

<pre><div><code class="language-js"><span class="token">areAnagrams</span><span class="token">(</span><span class="token">'cinema'</span><span class="token">,</span><span></span><span class="token">'iceman'</span><span class="token">)</span><span class="token">;</span><span></span><span class="token">// Output: true</span><span>
</span><span></span><span class="token">areAnagrams</span><span class="token">(</span><span class="token">'restful'</span><span class="token">,</span><span></span><span class="token">'fluster'</span><span class="token">)</span><span class="token">;</span><span></span><span class="token">// Output: true</span><span>
</span><span></span><span class="token">areAnagrams</span><span class="token">(</span><span class="token">'hello'</span><span class="token">,</span><span></span><span class="token">'world'</span><span class="token">)</span><span class="token">;</span><span></span><span class="token">// Output: false</span></code></div></pre>

## Hints

* You should start by converting both strings to either `lowercase` or `UPPERCASE`. This will make it easier to compare them.
* Once both strings are in the same case, you can find a way to use `.sort()` method on them. Keep in mind that `.sort()` can only be used on arrays.

> The function should be exported properly using ESM Syntax.
>
