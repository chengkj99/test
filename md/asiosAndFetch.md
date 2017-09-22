One of the final sections of Stephen Grider’s excellent ‘ES6 Javascript: The Complete Developer’s Guide’ course on Udemy.com discusses the .fetch() method and some if its shortcomings. He points out that there are some things with .fetch() that aren’t ideal and suggests that there are other options out there for making HTTP requests. One of those options is axios.js. I had not heard of Axios before so this seemed like a great opportunity to do a little digging and see what I could come up with. (Since this is referencing material from Stephen’s course, I am using examples and conventions similar to his.)

在Stephen Grider的S6 JavaScript课程中一节讨论课上。他指出，有些事情使用fetch()并不是理想的建议和选择，还有其他的进行HTTP请求的方式。其中一个选项是axios.js。在之前我没有听说过Axios，但感觉这是一个伟大的机会去挖掘它。（因为这是参考史蒂芬课程的材料，我使用的例子和惯例类似于他的。）


Axios is a Javascript library used to make http requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. Another feature that it has over .fetch() is that it performs automatic transforms of JSON data.

Axios是一个用于从浏览器环境或从`Node.js`环境发起`XMLHttpRequests HTTP`请求的JavaScript库，它支持ES6提供的Promise。另外，它比`fetch()`更好的支持自动执行JSON类型数据转换。


If you use .fetch() there is a two-step process when handing JSON data. The first is to make the actual request and then the second is to call the .json() method on the response.

如果你使用过`.fetch()`的话,你会知道它获取数据有两步，首先是发送请求Request，然后再调用`.json()` 方法获取响应Response。

Here is a simple example using the Spotify API. I set the url has a variable and then pass it to fetch and set the .then() callback to console the data that gets returned from the request


这里是一个使用Spotify API发起请求的一个简单的例子。我先声明一个URL变量，然后通过`fetch()`发起请求，在`.then()`方法里获得响应。

```
const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
fetch(url).then(data=>console.log(data));
```

![]()

That’s great, but this is not the data you are looking for. That is the response from the server letting you know that your request went through just fine. Great, but you can’t do much with that.

这看起来很好，但是如图所示这不是你要找的数据。这只是服务器的反应，让你知道你的请求完成了。虽然还不错，但是你不能做的更多了。

To get to that data, you have to pass it to .json() first and then you can see it
为了得到我们想要的数据，我们首先需要用`.json()`去将数据转换成JSON对象。


```
fetch(url).then(response => response.json()).then(data => console.log(data));
```

Now, this is the data from Spotify that we wanted
![]()
现在，这个才是我们想要的数据。


---


Let’s see how this is handled with Axios
让我们看看Axios是怎么处理的。

The first step in using Axios is installing Axios. You can use npm if you want to run axios in node or a cdn if you want to run it in your browser

首先你需要安装Axios，如果你在node环境中使用，可以使用npm进行安装，如果在浏览器环境中使用，可以使用CDN。
```
npm install axios
```
OR
```
https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.min.js
```

Then, in my console, I assign the url variable and then pass it to the axios.get() method


然后在我的控制台通过`axios.get()`发起请求。
```
const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
axios.get(url).then(response => console.log(response));
```

So by using axios you can cut out the middle step of passing the results of the http request to the .json() method. Axios just returns the data object you would expect.

所以，使用axios可以省去中间使用`.json()`处理返回结果的环节，通过axios返回的数据就是我们想要的数据。


The second issue that Stephen brings up is how .fetch() handles error responses. Logically you would think that if .fetch() gets an error it would enter the .catch() block and return anything there, right? Not necessarily. Here is an example.

第二个问题是使用如何使用`.fetch()`处理错误的响应，一般从逻辑上你可能会认为，如果`.fetch()`发生异常，它将进入`.catch()`在那里进行处理对吗？不全是，下面是一个例子：

I have altered my url variable from the previous examples so that it is now incorrect. I would expect a 400 error at this point and for my .fetch() to go into the .catch() block but this is what happens instead.

我希望改变之前的url，使他变的有点问题，我想再发起 `.fetch()`的时候产生报错400，然后进入`.catch()`我想看看它发生了什么
```


const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCFcdsds';
fetch(url).catch(error => console.log('BAD', error)).then(response => console.log('GOOD', response));
```


I’ve added the ‘BAD’ and ‘GOOD’ strings in the responses to clarify what is happening here.

我在回答里添加了“GOOD”和“BAD”字符串，为了清楚的知道发生了什么。

![4]()

I get the 400 response code but, as you can see by the ‘GOOD’ string in the console, the .then() block was executed. How does Axios handle this? The way you would probably expect. You get any kind of error with the http request and the .catch() block is executed.

我得到400的响应代码，但是，正如你看到的'GOOD'的字符串在控制台，执行的是then()方法。而Axios的处理，正如我们期待的方式。这种错误的HTTP请求被catch()执行。


![5]()

The ‘BAD’ string is there and the error is logged to the console.
The .fetch() method is a great step in the right direction of getting http requests native in ES6, but just know that if you use it there are a couple of gotchas that might be better handled by third-party libraries like Axios.

错误的信息被打印到控制台，`fetch()`方法作为新一代HTTP请求方式较好的支持了原生ES6的语法，向一个极好的方向迈出了重要的一步。但是在一些细节问题的处理上，像Axios这样的第三方库似乎做的更好。
