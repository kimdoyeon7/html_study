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
<p>gnb_lnb를 구성할 때 사용하는 태그</p>
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
<p>쇼핑몰 사이트의 제품 가격 및 옵션 창에서 자주 사용하는 태그</p>
<p><strong> &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt; 태그로 구성되어 있다.</strong></p>
<dl> &lt;dl&gt; = 하나의 박스(그룹)
  <dt> &lt;dt&gt; = 제목</dt>
  <dd> &lt;dd&gt; = 내용</dd>
</dl>
<p> 정의형 태그의 특징은?</p>
<p><em>반드시 &lt;dl&gt; 안에는 &lt;dt&gt;,&lt;dd&gt; 가 와야한다.</em></p>
<p><em> &lt;dt&gt; , &lt;dd&gt; 는 1 : 1로 구성되어야한다.</em></p>
<p><em> &lt;dt&gt; , &lt;dd&gt; 는 형제태그이다. </em></p>
<p><em> &lt;dt&gt; , &lt;dt&gt; , &lt;dd&gt; 로는 구성이 안된다. </em></p>

<hr>



<div class="study">
  <h2>23.02.16 - HTML - 시맨틱태크, 그룹태그</h2>
  <dl>
    <dt>그룹태그는 &lt;div&gt; 가 있음</dt>
    <dd>&lt;div&gt; 는 속성에 class=""를 넣어 이름을 주어야함.</dd>
    <dd>&lt;div&gt; 는 css에서 공통된 효과를 주기 위해 필요함</dd>
    <dd>&lt;div&gt; 는 피그마에서 오토레이어 효과를 준 부분을 표현하는 태그 </dd>
    <dt>시맨틱태그는 총 11개가 있음 </dt>
  </dl>
</div>

<hr>

<h2>23.02.17 - HTML - 링크, 이미지, 비디오 태그</h2>
<ul>
  <li>링크 태그 &lt;a href=""&gt;&lt;/a&gt;</li>
  <li>이미지 태그 &lt;img&gt; </li>
  <li>비디오 태그 &lt;video&gt;&lt;/video&gt;</li>
</ul>
<div>
  <p><strong>링크태그</strong></p>
  <ol>
    <li>절대경로<p>도메인, 절대 변하지 않는 주소</p></li>
    <li>상대경로<p>현재 내 파일 위치 기준으로 연결하는 파일 위치를 작성하는 것</p></li>
  </ol>
  <p><strong>링크 태그의 속성과 속성값</strong> </p>
  <ul>
    <li> &lt;a href="" <em>target=""</em>&gt; = 링크 위치 표시 
      <ul>
        <li>_self = 현재창에표시</li>
        <li>_blank = 새로운 창에 표시 가장 많이 사용</li>
        <li>_parent 현재 창의 부모에 표시</li>
        <li>_top = 최상단 창에 표시</li>
      </ul>
    </li>
    <li> &lt;a href="" <em>download=""</em>&gt; = 다운로드링크 </li>
    <li> lt;a <em>href="#id"</em>&gt; = 바로가기 링크 
      <ul> 
        &lt;a href="#go"&gt; 바로가기 &lt;/a&gt;<br>
        &lt;div id="go"&gt;..&lt;div&gt;
      </ul>
    </li>
    
  </ul>
</div>
