

# Remove falsy values

In this coding challenge, you will be implementing a function `removeFalsey(arr)` that accepts an array `arr` and returns a new array containing only the truthy values. A value is considered truthy if it is NOT one of the following: `false`, `null`, `undefined`, `0`, `NaN`, or an empty string.

## Instructions

* The input array may contain any number of values, including zero.
* The returned array should only contain truthy values.
* The original input array should not be modified.

## Example test cases

<pre><div><code class="language-js"><span class="token">const</span><span> arr </span><span class="token">=</span><span></span><span class="token">[</span><span class="token">0</span><span class="token">,</span><span></span><span class="token">1</span><span class="token">,</span><span></span><span class="token">false</span><span class="token">,</span><span></span><span class="token">2</span><span class="token">,</span><span></span><span class="token">''</span><span class="token">,</span><span></span><span class="token">3</span><span class="token">]</span><span class="token">;</span><span>
</span><span></span><span class="token">const</span><span> result </span><span class="token">=</span><span></span><span class="token">removeFalsy</span><span class="token">(</span><span>arr</span><span class="token">)</span><span class="token">;</span><span>
</span><span></span><span class="token">console</span><span class="token">.</span><span class="token method property-access">log</span><span class="token">(</span><span>result</span><span class="token">)</span><span class="token">;</span><span></span><span class="token">// should log [1, 2, 3]</span></code></div></pre>
