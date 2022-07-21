// Blog Image
import Blog2 from 'Assets/blog/blog-2.png';
import Blog3 from 'Assets/blog/blog-3.png';
import Blog4 from 'Assets/blog/blog-4.jpg';
import Blog5 from "Assets/blog/blog-5.png";
import Blog6 from "Assets/blog/blog-6.png";
import Blog7 from "Assets/blog/blog-7.png";

export default [
    {
        title: "Aws Reverse Proxy!",
        image: Blog7,
        details: '<h2><strong>What is a Reverse Proxy?</strong></h2><p><span style="font-size:16px">A standard proxy server works on behalf of clients, often by providing privacy or filtering content. A reverse proxy works on behalf of a server, intercepting traffic and routing it to a separate server.</span></p><p><span style="font-size:16px">There are several reasons you might want to install a reverse proxy. One of the main reasons is privacy.</span></p><p><span style="font-size:16px">If you have multiple servers, a reverse proxy can help balance loads between servers and improve performance. As a reverse proxy provides a single point of contact for clients, it can centralize logging and report across multiple servers.</span></p><p><span style="font-size:16px">Nginx can improve performance by serving static content quickly and passing dynamic content requests to Apache servers.</span></p><p><span style="font-size:16px">This guide will help you install and configure an Nginx reverse proxy on your system.</span></p><h2><strong>Prerequisites</strong></h2><ul><li><span style="font-size:16px">A Linux server with Apache, PHP, and a firewall</span></li><li><span style="font-size:16px">Access to a root user with <strong>sudo </strong>access</span></li><li><span style="font-size:16px">Linux command-line or terminal (<strong>Ctrl</strong>–<strong>Alt</strong>–<strong>T</strong> for Ubuntu, <strong>Alt</strong>–<strong>F2</strong> for CentOS)</span></li><li><span style="font-size:16px">Package manager (such as APT)</span></li></ul><h2><strong>Setting Up an Nginx Reverse Proxy</strong></h2><p> </p><h2><strong>Step 1: Install Nginx from Default Repositories</strong></h2><p><span style="font-size:16px">Open a terminal window and enter the following:</span></p><pre> <code>sudo apt-get update</code></pre><p><span style="font-size:16px">Allow the package manager to finish refreshing the software lists, then enter the following:</span></p><pre> <code class="language-javascript">sudo apt-get install nginx</code></pre><p><span style="font-size:16px">Allow the process to complete.</span></p><h2><strong>Step 2: Start Nginx and Configure to Launch on Reboot</strong></h2><p><span style="font-size:16px">To start Nginx:</span></p><pre> <code>sudo systemctl start nginx</code></pre><p><span style="font-size:16px">To enable Nginx:</span></p><pre> <code>sudo systemctl enable nginx</code></pre><p><span style="font-size:16px">To check Nginx is running:</span></p><pre> <code>sudo systemctl status nginx</code></pre><h2><strong>Step 4: Unlink Default Configuration File</strong></h2><p><span style="font-size:16px">In the terminal, enter the following:</span></p><pre> <code>sudo unlink /etc/nginx/sites-enabled/default</code></pre><h2><strong>Step 5: Create New Configuration File</strong></h2><p><span style="font-size:16px">To create a new configuration file, enter:</span></p><pre> <code>cd /etc/nginx/sites-available/</code></pre><pre> <code>sudo vi custom_server.conf</code></pre><p><span style="font-size:16px">Replace <strong><code>custom_server</code></strong> with a name that’s meaningful to you. In the new file, enter:</span></p><pre> <code>server { listen 80; location / { proxy_pass http://my_server; } }</code></pre><p><span style="font-size:16px">This is a very basic Nginx reverse proxy example. Nginx is set to listen for all traffic on port 80 for all traffic.</span></p><p><span style="font-size:16px">The <strong><code>proxy_pass</code></strong> command directs all traffic on port 80 to <strong><code>http://my_server</code></strong>. Just change <strong><code>http://my_server</code></strong> to the location of your choice, and Nginx will intercept client requests and route them to the location you specify. Once you’ve finished, save the file and exit.</span></p><h2><strong>Step 6: Link and Activate Configuration File</strong></h2><p><span style="font-size:16px">To activate the new Nginx file, enter:</span></p><pre> <code>ln -s /etc/nginx/sites-available/custom_server.conf /etc/nginx/sites-enabled/custom_server.conf</code></pre><p><span style="font-size:16px">As usual, replace <strong><code>custom_server</code></strong> with the name of the configuration file you created in Step 5.</span></p><h2><strong>Step 7: Test and Restart Nginx</strong></h2><p><span style="font-size:16px">To test Nginx:</span></p><pre> <code>sudo service nginx configtest</code></pre><p><span style="font-size:16px">To restart Nginx:</span></p><pre> <code>sudo service nginx restart</code></pre><p> </p>',
        strategy: "A standard proxy server works on behalf of clients, often by providing privacy or filtering content. A reverse proxy works on behalf of a server, intercepting traffic and routing it to a separate server. There are several reasons you might want to install a reverse proxy. One of the main reasons is privacy.",
        category: 'Aws',
        time: '28 Feb 2022',
        source: 'https://phoenixnap.com/'
    },
    {
        title: "All about Web 3.O",
        image: Blog6,
        details: '<h2><strong>Introduction</strong></h2><p><span style="font-size:16px">Community is how networks scale and is considered as a core of all things Web3. Well, Let&rsquo;s see where we come from with web2. Social networks and other Digital platforms are highly&nbsp;incentivised&nbsp;in web2 to collect as much information as possible to target better ads for what they think we want and made the information more polarized.The difference between Web2 and Web3 is that in Web3 the incentives have absolutely nothing to do with collecting our data for ad targeting.Web3 also optimizes transparency and decentralization of decisions are sum of the underlying principles and mechanics o Web3.</span></p><h2><strong>Blockchain</strong></h2><p><span style="font-size:16px">It&nbsp;is safe to say that all of the entirety of Web3 is built on the &ldquo;<strong>Blockchain&rdquo;</strong>&nbsp;technology. Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.</span></p><h2><strong>Importance of Blockchain</strong></h2><p><span style="font-size:16px">Business runs on information. The faster it&rsquo;s received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more. And because members share a single view of the truth, you can see all details of a transaction end to end, giving you greater confidence, as well as new efficiencies and opportunities.</span></p><h2><strong>Key Elements of Blockchain:</strong></h2><h3><strong>Distributed Ledger Technology:</strong></h3><p><span style="font-size:16px">All network participants have access to the distributed ledger and its immutable record of transactions. With this shared ledger, transactions are recorded only once, eliminating the duplication of effort that&rsquo;s typical of traditional business networks.</span></p><h3><strong>Immutable records:</strong></h3><p><span style="font-size:16px">No participant can change or tamper with a transaction after it&rsquo;s been recorded to the shared ledger. If a transaction record includes an error, a new transaction must be added to reverse the error, and both transactions are then visible.</span></p><h3><strong>Smart Contracts:</strong></h3><p><span style="font-size:16px">To speed transactions, a set of rules called a smart contract is stored on the blockchain and executed automatically. A smart contract can define conditions for corporate bond transfers, include terms for travel insurance to be paid and much more.</span></p><h2><strong>Use case of Web3:</strong></h2><h3><strong>Finance:</strong></h3><p><span style="font-size:16px">The use case of Web3 in finance can defined as Decentralised finance, It is the massive reduction in fees,time and cutting out of intermediaries that allows anyone to engage in the transactions</span></p><h2><strong>Non-fungibe Token(NFTs):</strong></h2><p><span style="font-size:16px">Non-fungible tokens or NFTs basically means that it&rsquo;s unique and can&rsquo;t be replaced with something else. These are unique cryptographic tokens on blockchain.Unlike physical money and cryptocurrencies which are fungible they cannot be traded or exchanged one for another.Nfts are considered to be new decentralized virtual assets which are irreplaceable. Nfts cut out the need to rely on content streaming and copyright cartels such as big production companies and gives the creators and contributors the ability to create value and ownership for their work</span></p><h2><strong>Decentralized Autonomous Organisations(DAOs):</strong></h2><p><span style="font-size:16px">A DAO, or &ldquo;Decentralized Autonomous Organization,&rdquo; is a community-led entity with no central authority. It is fully autonomous and transparent.Smart contracts lays the foundation rules,execute the agreed upon decisions. DAO is governed by entirely by its individual members who collectively make critical decisions about the future of project, such as technical upgrades and treasury allocations.</span></p><h2><strong>Working of DAOs:</strong></h2><p><span style="font-size:16px">The rules of the DAO are established by a core team of community members through the use of smart contracts. These smart contracts lay out the foundational framework by which the DAO is to operate. They are highly visible, verifiable, and publicly auditable so any potential member can fully understand how the protocol is to function at every step.Once these rules are formally written onto the blockchain, the next step is around funding: the DAO needs to figure out how to receive funding and how to bestow governance.This is typically achieved through token issuance, by which the protocol sells tokens to raise funds and fill the DAO treasury. token holders are given certain voting rights, usually proportional to their holdings. Once funding is completed, the DAO is ready for deployment.At this point, once the code is pushed into production, it can no longer be changed by any other means other than a consensus reached through member voting. That is, no special authority can modify the rules of the DAO; it is entirely up to the community of token holders to decide. Once you&rsquo;ve found a project of interest, there are a few different ways to get directly involved. I feel it is important to note that not all DAOs operate with the same purpose so the first step is figuring out the core function of each DAO.For DAOs focused on technical governance, it&rsquo;s important to understand what sort of voting rights are granted to token holders and what kind of proposals are at stake.In some instances such as Uniswap, token holders can vote on distributing a portion of the fees that the protocol collects amongst themselves. In other protocols such as Compound, token holders can vote on distributing these protocol fees towards bug fixes and system upgrades.This approach also allows freelancers and those generally interested in the project to be able to join ad hoc and receive compensation for their work by way of DAO grant-funded projects (DAOs regularly post these sorts of ad hoc projects on their Discord server).</span></p><h2><strong>Conclusion:</strong></h2><p><span style="font-size:16px">You were introduced to several concepts of Blockchain by taking Bitcoin as a case study. The Bitcoin is the first successful implementation of blockchain. Today, the world has found applications of blockchain technology in several industries, where the trust without the involvement of a centralized authority is desired. So welcome to the world of Blockchain.</span></p>',
        strategy: 'Also known as the decentralized web, Web 3.0 is the third version of the Internet, which is an improvement over the current Web 2.0 Internet. ... Additionally, Web 3.0 is believed to be more user-specific, which will ensure data security and privacy while avoiding the risk of Internet hacking.',
        category: 'Web Community',
        time: '09 Feb 2022',
        source: 'https://medium.com/'
    },
    {
        title: 'Missing story to React?',
        image: Blog5,
        details: 'React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”. That’s cool. If you want to jump in and start playing with React right away, the official documentation has lots of resources to help you get started. This post is for people who want an answer to the questions, “why React? Why does React work the way it works? What is the purpose of the API designs?” When React was first introduced, it fundamentally changed how JavaScript frameworks worked. While everyone else was pushing MVC, MVVM, etc, React chose to isolate view rendering from the model representation and introduce a completely new architecture to the JavaScript front-end ecosystem: Flux. Why did the React team do that? Why was it better than the MVC frameworks (and jQuery spaghetti) that came before? In the year 2013, Facebook had just spent quite a bit of effort integrating the chat feature: A feature that would be live and available across the app experience, integrating on virtually every page of the site. It was a complex app within an already complex app, and uncontrolled mutation of the DOM, along with the parallel and asynchronous nature of multi-user I/O presented difficult challenges for the Facebook team. For instance, how can you predict what is going to be rendered to the screen when anything can grab the DOM and mutate it at any time for any reason, and how can you prove that what got rendered was correct? You couldn’t make those guarantees with any of the popular front- end frameworks prior to React.DOM race conditions were one of the most common bugs in early web applications.In the year 2013, Facebook had just spent quite a bit of effort integrating the chat feature: A feature that would be live and available across the app experience, integrating on virtually every page of the site.It was a complex app within an already complex app, and uncontrolled mutation of the DOM, along with the parallel and asynchronous nature of multi - user I / O presented difficult challenges for the Facebook team. For instance, how can you predict what is going to be rendered to the screen when anything can grab the DOM and mutate it at any time for any reason, and how can you prove that what got rendered was correct ? You couldn’t make those guarantees with any of the popular front - end frameworks prior to React.DOM race conditions were one of the most common bugs in early web applications.When I’m asked “why should I care about React”, my answer is simple: Because we want deterministic view renders, and React makes that a lot easier.If deterministic render was React’s only trick, it would still be an amazing innovation.But the React team wasn’t done innovating.They launched with several more killer features, and over the years, they’ve added even more.',
        strategy: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
        category: 'React js',
        time: '20 Jan 2022',
        source: 'https://medium.com/'
    },
    {
        title: 'What Is Next.JS?',
        image: Blog2,
        details: 'The Next.js framework is based on the React framework. Next.js is a server-rendered React framework that requires little or no configuration. Nowadays, An increasing number of people are learning from the next js tutorials. Next.js isn’t so much about performance as it is about improving the developer experience and making it easier to build full-fledged, SSR-friendly web applications. Static builds are also supported by Next.js, but they aren’t the main target. When we get to the drawbacks, we’ll talk about them. Now the question is when should we use Next.Js. we can see a lot of features and advantages Next.Js has. In the following situations, we can use Next.Js to develop our web applications. Next, JS released a powerful eCommerce starter kit a few weeks ago that allows you to create high-performance, user-friendly, and Google-friendly webshops. When registering any website on the internet, SEO is always taken into account. Since these websites are made on the client-side, SEO does not function properly in most single-page applications. As Google crawls for indexing, it simply picks a bunch of JS files and Div tags with IDs, making it impossible to index a website. As a result, proceed. js is a programming language that is used to solve problems. When we are supposed to build a landing page, then we can use Next.Js, because it helps marketers a lot to make the marketing-focused page. Because our application will be rendered on the server, load times can improve significantly. Especially in those cases where visitors use slower devices. Writing a website entirely in HTML is not only difficult and time-consuming, but you’re unlikely to be able to write better code than what a machine can produce (at least in terms of package size).',
        strategy: 'Next.js is an open-source development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.',
        category: 'Next js',
        time: '25 Dec 2021',
        source: 'https://www.wikipedia.org/'
    },
    {
        title: 'What is graphql api?',
        image: Blog3,
        details: 'GraphQL or “Graph Query Language” is, just as the name suggests, a query language for APIs. While SQL is a query language for managing relational databases, GraphQL is a query language that allows the client (frontend) to request data from an API. Since GraphQL is just a query language, we need a library that will take care of the boilerplate code for us. Luckily, such a library already exists. Enter Apollo Server, a Node.js library that provides an easy-to-use GraphQL server right out of the box. Other GraphQL server libraries also exist like express-graphql, but Apollo Server allows for better scalability and features a larger community. Apollo Server also provides a neat GraphQL interface for performing queries and mutations during development. Now that we got that out of the way, we can finally start building our GraphQL API. Why use GraphQL over a traditional REST API? Let us take a look at some advantages GraphQL provides over its RESTful counterpart- One endpoint: With traditional REST APIs, you have to create specific endpoints based on the data you want to request. This makes scaling your API difficult because soon, you might find yourself having to manage tens, maybe hundreds, of routes that you will have to remember. Fewer server requests: GraphQL allows you to make multiple queries and mutations with only one server request. This can be useful when your server only allows a limited number of requests a day. Declarative data fetching: Unlike a REST API, GraphQL only fetches what you need. All you have to do is specify what fields to return. Type system: GraphQL uses a type system to describe your data, which makes developing much easier. If you are a TypeScript fan, this is a win-win. Self-documenting: GraphQL is self-documenting, meaning that all of your queries and mutations will automatically be documented by GraphQL. There are still many more advantages(and disadvantages) of GraphQL that are valuable to know. I would recommend reading GraphQL: Everything You Need to Know by Weblab Technology to learn more about GraphQL.',
        strategy: 'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.',
        category: 'Graphql',
        time: '01 Dec 2021',
        source: 'https://medium.com/'
    },
    {
        title: 'What is Node js?',
        image: Blog4,
        details: "Node.js is a JavaScript runtime environment. Sounds great, but what does that mean? How does that work? The Node run-time environment includes everything you need to execute a program written in JavaScript. Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application. Now you can do much more with JavaScript than just making websites interactive. JavaScript now can do things that other scripting languages like Python can do. Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code that the computer can run without needing to first interpret it. We already discussed the first line of this definition: “Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.” Now let’s understand the other two lines so we can find out why Node.js is so popular. I/O refers to input/output. It can be anything ranging from reading/writing local files to making an HTTP request to an API. I/O takes time and hence blocks other functions. Consider a scenario where we request a backend database for the details of user1 and user2 and then print them on the screen/console. The response to this request takes time, but both of the user data requests can be carried out independently and at the same time. In the blocking method, user2's data request is not initiated until user1's data is printed on the screen. If this was a web server, we would have to start a new thread for every new user. But JavaScript is single-threaded (not really, but it has a single-threaded event loop, which we’ll discuss a bit later). So this would make JavaScript not very well suited for multi-threaded tasks. That’s where the non-blocking part comes in. On the other hand, using a non-blocking request, you can initiate a data request for the user2 without waiting for the response to the request for the user1. You can initiate both requests in parallel. This non-blocking I/O eliminates the need for multi-threading since the server can handle multiple requests at the same time.",
        strategy: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        category: 'Node js',
        time: '20 Nov 2021',
        source: 'https://medium.com/'
    }
]