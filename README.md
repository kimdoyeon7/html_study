<h1>반응형 웹디자인&웹퍼블리셔 양성과정 버전기록</h1>
<p>ex) 날짜 - 제목 - 요약</p>

<h2>23.02.13 시작 - HTML</h2> 
<p>H1~H6, p, br, inline, block</p>
<p>H1~H3은 검색키워드로 활용가능하다 . H4~H6 꼭 필요한 경우만 이용하거나 권장안함</p>
<p>block과 linline태그는 의미에 맞게 외부/내부 구조로 구성해서 사용해야 한다.(의미 중첩되지 않도록)</p>
<hr>

<h2>23.02.14 - HTML - 문서태크+내비게이션 개념 </h2>
<p><strong>블록태그종류</strong></p>
<p> &lt;h&gt; - 제목 , &lt;p&gt; - 내용 , &lt;hr&gt; - 구분선 , &lt;address&gt; - 풋터영역 , <blockquote>&lt;blockquote&gt;</blockquote> - 긴 인용문</p>
<p><strong>인라인태크종류</strong></p>
<p> <sub>&lt;sub&gt;</sub> <sup>&lt;sup&gt;</sup> <em>&lt;em&gt;</em> <strong>&lt;strong&gt;</strong> <q cite="">&lt;q&gt;</q> <code>&lt;code&gt;</code> <del>&lt;del&gt;</del> <s>&lt;s&gt;</s> &lt;br&gt; - 줄바꿈 </p>
<blockquote cite=https://webty.tistory.com/85> 유나쌤 블로그 참고 - https://webty.tistory.com/85 </blockquote>
<p><strong>네비게이션 개념</strong></p>
<p><em> gnb, lnb, snb, fnb + 번외개념:Breadcrumbs </em></p>
<p><em>gnb</em><br>사이트최상단네비게이션<br>어떤 페이지에 들어가도 고정되어있는 주 메뉴 </p>
<p><em>lnb</em><br>gnb의 하단에 배치된 서브메뉴=중분류메뉴</p>
<p><em>snb</em><br>페이지 내에 좌/우측에 일반적으로 존재하는 추가 메뉴</p>
<p><em>fnb</em><br>footer 영역에 존재하는 회사소개, 저작권 등의 보조메뉴</p>
<p><em>Breadcrumbs</em><br>경로구성 즉 경로를 알려주는 부분</p>
<hr>

<h2>23.02.15 - HTML - &lt;ol&gt; , &lt;ul&gt; , &lt;li&gt; , &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt; </h2>
<h3>순차/비순차 목록태그</h3>
<p><strong>순서가 있는 목록일 때는 &lt;ol&gt; 를 사용한다. </strong></p>
<p>&lt;ol&gt; 의 특징은? </p>
<ol>
  <li> 순서가 존재한다</li>
  <li> 내가 글머리에 숫자를 입력하지 않아도 순서대로 나열된다.</li>
</ol>
<p><strong>순서가 없는 목록일 때는 &lt;ul&gt; 를 사용한다.</strong></p>
<p>&lt;ul&gt; 의 특징은?</p>
<ul>
  <li>순서없이 나열한다.</li>
  <li>글머리가 숫자가 아닌 아이콘으로 표시된다.</li>
</ul>
<p><code>&lt;ol&gt; 와 &lt;ul&gt; 공통 특징은?</code></p>
<p><em>반드시 &lt;li&gt; 태그와 가장 근접해야한다. </em></p>
<p><em>반드시 li 태그의 형제는 li 태그만 가능하다 </em></p>
<p><em> &lt;li&gt; 태그를 사용하기 위해서는 반드시 &lt;ol&gt; , &lt;ul&gt; 태그를 사용 후 사용해야한다.</em></p>

<h3>정의형 태그</h3>
<p><strong> &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt; 태그로 구성되어 있다.</strong></p>
<p> 정의형 태그의 특징은?</p>
<p><em>반드시 &lt;dl&gt; 안에는 &lt;dt&gt;,&lt;dd&gt; 가 와야한다.</em></p>
<p><em>dt 와 dd 는 1 : 1로 구성되어야한다. dt,dt,dd 로는 구성이 안된다.</em></p>

<hr>
