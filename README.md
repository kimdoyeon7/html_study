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
    <dt>그룹태그는 &lt;div&gt; ;- 블록태그 , &lt;span&gt; - 인라인태그가 있음</dt>
    <dd>&lt;div&gt; 는 속성에 class=""를 넣어 이름을 주어야함.</dd>
    <dd>&lt;div&gt; 는 css에서 공통된 효과를 주기 위해 필요함</dd>
    <dd>&lt;div&gt; 는 피그마에서 오토레이어 효과를 준 부분을 표현하는 태그 </dd>
    <dt>시맨틱태그(-블록태그)는 총 11개가 있음 </dt>
    <dd>
      <ol>
        <li>&lt;header&gt;&lt;/header&gt;<br>
            제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함</li>
        <li>&lt;nav&gt;&lt;/nav&gt;<br>
            다른 페이지로의 링크를 보여주는 구획을 나타냄. 자주 쓰이는 예제는 메뉴, 목차, 색인</li>
        <li>&lt;section&gt;&lt;/section&gt;<br>
            문서의 독립적인 구획을 나타내며 제목(H)을 포함하는 경우가 많음(필수x)</li>
        <li>&lt;aside&gt;&lt;/aside&gt;<br>
            사이드바 혹은 콜아웃 박스로 표현</li>
        <li>&lt;article&gt;&lt;/article&gt;<br>
            사이트 안에서 독립적으로 구분 / 게시판과 블로그 글, 매거진이나 뉴스 기사 </li>
        <li>&lt;footer&gt;&lt;/footer&gt;<br>
             구획의 작성자, 저작권 정보, 관련 문서 등의 내용</li>
        <li>&lt;figure&gt; 이미지 &lt;figcaption&gt;설명&lt;/figcaption&gt;&lt;/figure&gt; <br> 
            독립적인 콘텐츠를 표현/이미지 태그와 관련 o</li>
        <li>&lt;details&gt; &lt;summary&gt;요약&lt;/summary&gt; 내용 &lt;/details&gt;<br>
            *토글같은 기능을 하는 태그</li>
        <li>&lt;main&gt;&lt;/main&gt;<br>
            &lt;body&gt;의 주요 콘텐츠 <br>
            문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠</li>
        <li>&lt;mark&gt;&lt;/mark&gt;<br>
            현재 맥락에 관련이 깊거나 중요해 표시, 하이라이트한 부분</li>
        <li>&lt; time detetime="날짜,시간"&gt;&lt;time&gt;<br>
        적절한 검색 결과나, 알림 같은 특정 기능을 구현할 때 사용</li>
      </ol>
    </dd>
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
    <li> &lt;a <em>href="#id"</em>&gt; = 바로가기 링크 
      <ul> 
        &lt;a href="#go"&gt; 바로가기 &lt;/a&gt;<br>
        &lt;div id="go"&gt;..&lt;div&gt;
      </ul>
    </li>
  </ul>
</div>
<div>
  <p><strong> 이미지 태그 - 인라인태그</strong></p>
  <ul>
    <li>url은 상대경로 방식으로 작성하는 것을 권장함</li>
    <li><em>속성은 src="" 와 alt="" 가 있음</em>
      <ul>
        <li>src=""은 상대경로입력</li>
        <li>alt=""은 시각장애인들에게 필요한 객관적인 내용의 대체 텍스트를 적음 </li>
        <li>alt 사용을 위해 이미지태그는 의미전달이 필요한 이미지와 아닌 이미지를 구분하기</li>
      </ul>
    </li>
  </ul>
  <ul>
    <li>
       &lt;figure&gt;<br>
       &lt;img src="URL" alt=""&gt; <br>
       <em>&lt;figcaption&gt;caption&lt;/figcaption&gt;</em> <br>
       &lt;/figure&gt;  <br>
       문서 안 사진을 감싸는 틀, 이미지와 동떨어진 텍스트작성태그, <br>
       catpion부분에 텍스트 작성
    </li>
  </ul>
</div>
<div>
  <p><strong>비디오태그 - 블록태그</strong></p>
  <ul>
    <li> &lt;video src=""&gt; ____ &lt;/video&gt;</li>
    <li> 비디오태그 속성값 (___ 칸에 넣는)
      <ul>
        <li>autoplay</li>
        <li>muted</li>
        <li>controls</li>
        <li>loop</li>
      </ul>
    </li>
    <li>
        잘 만든 웹은 동영상이 바로 재생되더라도 음소거 된 웹<br> 
        때문에 비디오 태그에는 autoplay 와 muted 속성을 기본적으로 넣어야함.
    </li>
  </ul>
</div>

<hr>


<h2>23.02.18 - figma - 스타일가이드, 와이어프레임,프로토타입</h2>
<p>17일 배운 내용 재정리함.</p>
<p>웹 접근성 로그인 페이지 이미지 제작함.</p>
<ul>
  <li>
    <figure>
    <img src="https://user-images.githubusercontent.com/125236689/219940566-9f730909-9816-4a47-a181-af8244b06d15.png" alt=""><br>
      <figcaption><em>참고자료</em></figcaption>
    </figure>
  </li>
  <li>
    <figure>
    <img src="https://user-images.githubusercontent.com/125236689/219940660-d436eb14-1d2a-49eb-95f9-0322e118e886.png" alt=""><br>
    <figcaption><em>스타일가이드</em></figcaption>
    </figure>
  </li>
  <li>
    <figure>
    <img src="https://user-images.githubusercontent.com/125236689/219940709-54e00cd2-83a5-4d2d-ab93-8f7c14a19734.png" alt=""><br>
    <figcaption><em>와이어프레임</em></figcaption>
    </figure>
  </li>
  <li>
    <figure>
    <img src="https://user-images.githubusercontent.com/125236689/219940729-b2a58617-ffbc-4866-920a-b2ee8d3a1aa8.png" alt=""><br>
    <figcaption><em>프로토타입</em></figcaption>
    </figure>
  </li>
</ul>


<hr>

<h2>23.02.20 - Table</h2>

<p><strong>html 기본 구조문 = html:5</strong></p>
<p>우리가 적은 구조문 적으려면</p>
<ul>
  <li>meta : kw </li>
  <li>meta : des 를 쳐서 자동완성 되도록하기</li>
</ul>

<p>index.html은 페이지 규칙, 모든 페이지의 시작파일임.<br>
처음 생성하는 파일은 무조건 인덱스 파일로 열어야함. (다른숫자도 붙이면 안됨</p>
<p>Ctrl+[&nbsp;] = 들여쓰기, 내어쓰기</p>

<h3>표 태그 - 블록태그</h3>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>태그명</th>
      <th>의미</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">block</td>
      <td>&lt;tr&gt;</td>
      <td>가로행 태그</td>
    </tr>
    <tr>
      <!--<td></td>-->
      <td>&lt;td&gt;</td>
      <td>내용(열)태그</td>
    </tr>
    <tr>
      <!--<td></td>-->
      <td>&lt;th&gt;</td>
      <td>제목(열)태그</td>
    </tr>
  </tbody>
</table>


<p><strong>&lt;table&gt;-&lt;tr&gt;(행)-&lt;th&gt;(제목 열)-&lt;td&gt;(열)</strong></p>
<p>행 = 가로 , 열 = 세로</p>
<p>&lt;td&gt;는 &lt;p&gt;와 같은 성질(내용) 즉 &lt;td&gt;의 제목열인 &lt;th&gt;(제목)를 넣어주어야함.</p>
<p>&lt;tr&gt; 안에는 &lt;th&gt;가 최소 1개는 있어야함.</p>
 
<p><strong> &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt; 행 그룹</strong></p>
<ul>
  <li>&lt;thead&gt; = &lt;th&gt; 위주로 구성된 제목 행</li>
  <li>&lt;tbody&gt; = 내용 행 그룹
    <ul>
      <li> &lt;tfoot&gt;을 &lt;thead&gt; 바로 밑에 놓으면 스크린리더기에서 바로 총 수량이 나올것임.
           때문에 &lt;tfoot&gt;을 &lt;thead&gt; 바로 밑에 놓기<br> 오류 뜨지만 무시하기
        </li>
    </ul>
  </li>
  <li>&lt;tfoot&gt; = 결과 행을 묶을때 사용 (총수량, 합계)</li>
</ul>

<p><strong>속성 colspan rowspan="숫자" - &lt;th&gt;, &lt;td&gt;에 사용하는 속성</strong></p>

<ul>
  <li>가장 먼저 있는 태그에 속성값을 입력할 것</li>
  <li>colspan은 하나의 &lt;tr&gt;에 있는 행을 합치는 것임.</li>
  <li>rowspan은 여러 &lt;tr&gt; 속에 같은 위치에 있는 열을 합치는 것임.</li>
  <li><em>이 속성은 초보자들은 표를 정상적으로 만든 후 나중에 처리하는 방식으로 하기</em></li>
</ul>

<p><strong>&lt;th scope="col또는row"&gt;</strong></p>
<p>표의 읽기 방향 설정 속성임</p>
<p>스크린리더기를 위해 필요한 속성임</p>
<ul>
  <li>col=수직</li>
  <li>row=수평</li>
</ul>

<hr>
<h2>23.02.21-HTML-form</h2>
<form action="#" method="get">
  <fieldset>
    <legend>form 퀴즈</legend>
    <span>다음 중 label for와 연관된 input 속성은?</span><br>
    <label><input type="radio" name="quiz" value="id">1. id</label><br>
    <label><input type="radio" name="quiz" value="class">2. class</label><br>
    <label><input type="radio" name="quiz" value="name">3. name</label><br>
      <span>다음 중 input type 속성 중 입력속성이 아닌 것은? 2개 </span><br> 
      <label><input type="checkbox" name="quiz2" value="text">1. text</label><br>
      <label><input type="checkbox" name="quiz2" value="password">2. password</label><br>
      <label><input type="checkbox" name="quiz2" value="tel">3. tel</label><br>   
      <label><input type="checkbox" name="quiz2" value="url">4. url</label><br>
      <label><input type="checkbox" name="quiz2" value="email">5. email</label><br>
      <label><input type="checkbox" name="quiz2" value="textarea">6. textarea</label><br>
      <label><input type="checkbox" name="quiz2" value="checkbox">7. checkbox</label><br>
       <label><input type="checkbox" name="quiz2" value="radio">8. radio</label><br>
  </fieldset>
</form>
<p><strong>Form 태그 기본&활용 공부</strong></p>
  <ol>
    <li>&lt;input&gt;</li>
    <li>&lt;label&gt;</li>
    <li>&lt;select&gt;</li>
    <li>&lt;option&gt;</li>
    <li>&lt;optgroup&gt;</li>
    <li>&lt;reset&gt;</li>
    <li>&lt;submit&gt;</li>
    <li>&lt;button&gt;</li>
   </ol> 
<p><strong>&lt;input&gt;</strong></p>
<p><strong>input type="" 에는 입력양식과 선택양식이 있음, type의 값</strong></p>
<ul>
  <li>입력양식
    <ul>
      <li>text</li>
      <li>password</li>
      <li>tel</li>
      <li>number</li>
      <li>url</li>
      <li>email</li>
      <li>textarea .. 등등</li>
    </ul>
  </li>
</ul>
<ul>
  <li>선택양식
    <ul>
      <li>checkbox</li>
      <li>radio</li>
      <li>option</li>
      <li>select ..등등</li>
    </ul>
  </li>
</ul>
<p><strong>input의 속성에 들어가는 type를 제외한 다른 요소</strong></p>
<ul>
  <li>입력양식
    <ul>
      <li>name : 데이터 구분 명칭(그룹)</li>
      <li>readyonly : 읽기전용</li>
      <li>maxlength : 최대 글자 입력 수</li>
      <li>placeholder : 제시된 텍스트 (활성화 시 제거)</li>
      <li>value : 제시된 텍스 (활성화 시 제거 X)</li>
      <li>autofocus : 커서 자동 포커스 </li>
    </ul>
  </li>
</ul>
<ul>
  <li>선택양식
    <ul>
      <li>name : 데이터 구분 명칭(그룹)</li>
      <li>checked : 미리선택</li>
      <li>value : 값, 이름 </li>
    </ul>
  </li>
</ul>
<dl>
  <dt>속성의 특징</dt>
  <dd><em>readyonly, autofocus, checked 는 속성 값 필요 없음</em></dd>
  <dd>autofocus는 html당 하나만 사용가능</dd>
</dl>
<p><strong>&lt;label&gt; - 인라인태그</strong></p>
<p>편의성을 위한 태그 / 글자를 눌러도 체크가 되도록</p>
<ol>
  <li>&lt;label&gt; &lt;input&gt; &lt;/label&gt; </li>
  <li>&lt;label&gt; &lt;/label&gt; &lt;input&gt; </li>
    <ul>
      <li>이 두가지 방법으로 인해서 css에서 차이가 날것임</li>
      <li>두번째 방법일 경수 input 속성에 id 속성을 넣고, label 속성에 for를 넣어야 함 (같은값)</li>
    </ul>
</ol>
<p><strong>select, option - 인라인태그</strong></p>
<p>select(ul) , option(li) 와 비슷</p>
<p><strong>optgroup- 인라인태그</strong></p>
<p>select의 자식, option의 부모로 사용</p>
<p>기능은 없음</p>
<p><strong>reset, submit, button - 인라인태그</strong></p>
<p><em>reset</em>양식 초기화</p>
<p><em>submit</em>가입하기와 같은 서버에 직접적인 영향을 주는 것</p>
<p><em>button</em>프로그래밍과 함께 다양한 용도의 범용 버튼으로 사용</p>
<p>예시 : &lt;button type="submit/reset/button"&gt;&lt;/button&gt;</p>

<hr>

<h2>23.02.12 - HTML 총 정리</h2>
<p><strong>&lt;aside&gt;</strong> 를 정리하는 방법은 두개</p>
<ul>
  <li> &lt;div&gt; &lt;a&gt;*3</li>
  <li>&lt;ul&gt; &lt;li&gt; &lt;a&gt;*3</li>
  <li><strong>하지만 첫번째 방법이 태그가 적기 때문에 오류 관리하기 편함</strong></li>
</ul>
<div>
  <dl>
    <dt>웹 접근성 로그인 중에서 회원가입하기, 아이디/비번찾기는 &lt;a&gt;로 관리</dt>
    <dd>또한 가로 행 방향으로 태그(블럭)이 두개 있으면 반드시 그룹으로 묶어주어야함(피그마처럼)</dd>
  </dl>
</div>
<p><strong>웹접근성로그인에서 아이디 비번 입력창 태그는</strong></p>
<div>
  <p>&lt;ul&gt;, &lt;li&gt; 태그 사용해서 함</p> 
  <p>&lt;ul&gt; 속성에 class 넣음. (class="" 속성은 어느 태그에도 들어갈 수 있음.)</p>
  <p>&lt;ul&gt; class를 넣은 이유는 &lt;ul&gt;를 &lt;div&gt;로 묶었으면 &lt;div&gt;에 class를 넣는데 &lt;div&gt;가 없어지면서 &lt;ul&gt;에게 양도?함</p>
  <p>&lt;div&gt;가 없어진 이유는 &lt;div&gt;와 &lt;ul&gt;이 같은 블록태그로 그룹이 중복되어서 &lt;div&gt;가 없어짐</p>
  <p><em>이 부분은 노션 19일차 부분 참고</em></p>
</div>
<div>
  <p><strong>웹 접근성 로그인 부분의 가장 하단 텍스트 영역 태그는?</strong></p>
  <p>&lt;div&gt;로 묶고, class=bottom_text 로 정함</p>
  <p>나머지 텍스트는 &lt;p&gt;로 묶음. <strong>여기서! &lt;p&gt;를 세개 사용한 이유는?</strong></p>
  <p>행간을 정확하고 세밀하게 조절하기 위해서는 p를 세개로 적는 것이 더 완성도 있는 태그이다.</p>
</div>
<dl>
  <dt>현재페이지경로=브레드크럼, &lt;dl&gt;,&lt;dt&gt;,&lt;dd&gt;로 구성됨.</dt>
  <dd>&lt;dt&gt;에 적는 제목은 css에서 지울 부분이 됨</dd>
  <dd>브레드크럼에서 자주 보이는 화살표는 &lt;img&gt; 처리임</dd>
  <dd>화살표는 의미가 없는 이미지 즉 alt 는 적지 않아도 됨. 생략이라는 말은 아님</dd>
  <dd>
    css에서 화살표를 제공할 수 있기 때문에 html에 생략가능한 태그임. <br>
    <em>헷갈리지 않기 위해서는 작성하는 것이 도움이 됨</em>
  </dd>
</dl>
<div>
  <p>optionselect = 폼에서 목록양식을 만들 경우 필요한 태그</p>
  <p>fieldset = 폼 양식의 그룹을 묶을 때 사용하는 태그</p>
  <p>charset-utf-8 = 다국어 언어 설정</p>
  <p>description = 검색결과에 나타나는 문서의 정보 (사이트설명)</p>
  <p>link = 외부 스타일 연결 시 사용하는 태그명</p>
  <p>doctypehtml = html5  선언태그</p>
  <p>id =레이아웃에 명칭으로 주로 사용하는 반복할 수 없는 이름</p>
  <p>method = 폼 양식의 전송 방식을 결정하는 속성</p>
  <p>artical = 독립적인 내용을 담아주는 그룹 요소</p>
  <p>textarea = 사용자가 직접 입력할 수 있도록 여러 줄을 제공하는 칸</p>
  <p>class = 반복되는 디자인 요소에 설정하는 태그의 추가 명칭</p>
  <p>lang = 스크린리더기가 화면의 언어를 읽을 수 있도록 하는 속성</p>
  <p>rowspan = 서로 다른 행에 있는 열을 병합하는 속성</p>
  <p>colspan = 같은 행에 있는 서로 다른 열을 병합하는 속성</p>
  <p>sementictag = html5의 의미있는 레이아웃으로 생성된 새로운 태그명</p>
</div>

<hr>

<h2>23.02.23 - CSS </h2>
<p>HTML : 틀, 구조, 의미적인 용도로 사용, 하이퍼 텍스트 마크업 랭귀지</p> 
<p>CSS : HTML 디자인 역할</p>  
<p>cascading Style Sheet = CSS의 풀네임</p> 
<p>cascading(위에서 아래로 흐른다)</p> 
<p>*어디에 (어디그룹에) 있는 태그를 꾸미고 싶은지 정확하게 파악해야지 원하는 스타일을 원하는 대상에게 줄 수 있음.</p> 
<p>*css 작성 시에는 html의 가족관계(흐름) 순서대로 작성해야 한다.</p> 
<p>html 문법 : <태그 속성="값"></태그></p> 
<p>css 문법 : 선택자 {속성:값;}</p> 
<p>: = = 과 같은 의미</p>  
<p>; = / 와 같은 의미</p> 
<p>html 은 속성이 두개여도 끝나는 태그를 하나만 작성하는데</p>  
<p>css는 속성 값 마다 ;을 붙여야한다.</p>  
<p>css 속성 값에 "" 작성하는 경우는 => 값에 한글, 공백이 들어갈 경우</p> 
<p>값에 한글 들어가는 경우는 글꼴입력 = ""을 사용해야함</p>  
<p>noto sans도 ""사용해야함. 한글이라서가 아니라 공백이 들어가기 때문에</p> 
<p>'' 작은 따움표도 가능</p>  
<p>선택자란? css로 디자인하고자 하는 html 대상을 뜻함.</p> 
<p>ex) <p>text</p> - p태그에 묶인 글자를 빨강으로 하고 싶을 때</p>  
<p>p{글자색:빨강;}</p> 
<p>선택자랑 { 사이 공백 남겨주는 것이 깔끔하게 볼 수 있는 방법임.</p> 
<p>/*  */ css의 주석 모양임</p> 
    
<hr>

<h2>23.02.24 - CSS </h2>

<h3>글꼴스타일 적용방법</h3>
<p>글꼴스타일은 link로 연결되어있는 design.css에 적기</p>
<p><em>@import는 맨 위에 적기, 선택자 안에는 font-family:'폰트이름'.'폰트종류'</em></p>
<h3>rem단위</h3>
<ul>
  <li>rem 단위는 절대적인 단위</li>
  <li>디바이스에 따라 달라지지 않음</li>
  <li>em과 값은 같은 값임</li>
</ul>
<h3>line-height = 행간</h3>
<ul>
  <li>단위 = 없음</li>
  <li>기준 숫자 = 1.5로 업 다운</li>
  <li>작성법 = line-height:1.5;</li>
</ul>
<h3>letter-spacing = 자간</h3>
<ul>
  <li>단위 = em</li>
  <li>기준 숫자 = -0.02em 업 다운(피그마에서 -2%)</li>
  <li><sub>음수로 작성해야 가독성이 좋게 처리됨</sub></li>
  <li>작성법 = letter-spacing:-0.02em;</li>
</ul>
<h3>폰트 관련해서 보편적으로 사용되는 전체적인 틀</h3>
<p>=선택자 안에 font-family, font-size, line-height, letter-spacing 이 들어감</p>
<h3>word-spacing 단어 간 간격</h3>
<ul>
  <li>단위 = em</li>
  <li>기준 숫자 = -0.05 로 업 다운<br><sub>양수를 쓰는 방식으로 가독성 처리</sub></li>
  <li>작성법 = word-spacing:-0.05em;</li>
</ul>
<h3>font-weight: ;</h3>
<ul>
  <li>단위 = 없음</li>
  <li>기본 숫자 (설정하지 않을때 굵기) = 400</li>
  <li>평균 400 , 굵게 700~900</li>
</ul>
<p><strong>font-style</strong></p>
<ul>
  <li>italic = 기울기</li>
  <li>작성법 = font-style:italic;</li>
</ul>
<h3>대 소문자 변경법 </h3>
<ul>
  <li>text-transform:lowercase; = 소문자</li>
  <li>text-transform:uppercase; = 대문자</li>
  <li>text-transform:capitalize; = 앞 알파벳만 대문자</li>
  <ul>
    <li>이 속성을 넣고 싶지 않아서 html에서부터 제대로 작성하는 경우도 있음</li>
    <li>captialize을 적용하려면 html에 소문자로 적혀있어야함</li>
  </ul>
</ul>
<h3>밑줄과 취소선</h3>
<ul>
  <li>밑줄 = text-decoration:underline;</li>
  <li>취소선 = text-decoration:line-through;</li>
</ul>
<h3>파비콘 favicon</h3>
<ul>
  <li>보편적인 크기는 96*96 180*180</li>
  <li>1번 방법
    <ol>
      <li>피그마에서 원하는 크기로 프레임 미리 만들기</li>
      <li>메뉴에서 resources - plugins - icon 검색</li>
      <li>원하는거 정해서 프레임에 넣기 </li>
      <li>export - .png 파일로 저장하기</li>
    </ol>
  </li>
  <li>2번 방법
    <ol>
      <li>피그마에서 원하는 크기로 프레임 미리 만들기</li>
      <li>www.flaticon.com 무료 이미지 다운</li>
      <li>이름 변경해서 경로에 맞게 폴더에 저장</li>
      <li>경로 링크 복사해서 입력하기</li>
    </ol>
  </li>
  <li>번외 - 폰트어썸 - 반복적인 공통 아이콘 사용하는 법
    <ol>
      <li>www.cdnjs.com 접속</li>
      <li>font-awesome 검색</li>
      <li>맨 위 태그모양 눌러서 링크 복사</li>
      <li>html 위 link 태그 부분에 붙여넣기</li>
      <li>fontawesome 접속</li>
      <li>영어로 검색 후 무료 이미지 선택 </li>
      <li>&lt;i&gt; 복사 </li>
      <li>삽입을 원하는 부분에 넣기</li>
      <li><sub>이 방법으로 경로 화살표 삽입함</sub></li>
    </ol>
  </li>
</ul>
<h3>현재페이지 경로 숨기는 방법</h3>
<ul>
  <li>현재 페이지 경로 = dt 에 class="skip" 삽입</li>
  <li>선택자로 .skip {display:none;}</li>
  <li>reset.css 파일에 넣어놓기</li>
</ul>
<h3>활성화된 메뉴 색 변경하는 방법</h3>
<ul>
  <li>활성화 할 메뉴에 &lt;a&gt; 안에 class="active" 넣기</li>
  <li>선택자로 .active {color:__;} </li>
</ul>
<h3>display 요소 표시 속성 !!! 잘 기억하기 !!!</h3>
<p>display 요소는 기본 요소의 속성을 다른 요소로 변경할 때 필요한 태그임</p>
<p>선택자 안에 넣는 것임</p>
<ul>block 요소 특징
  <li>기본 너비 100%를 가지고 있음</li>
  <li>크기, 여백 적용 가능</li>
  <li>너비 100%와는 별도로 항상 줄바꿈이 이루어짐</li>
</ul>
<ul>inline 요소 특징
  <li>인라인 태그 내 내용만 인식</li>
  <li>크기 적용 X</li>
  <li>여백은 적용되나 크기 적용 불가 특징때문에 주변 요소와 겹침현상 발생</li>
  <li>줄바꿈 되지 않고 옆으로 나열이 됨</li>
</ul>
<ul>inline-block 요소 특징
  <li>CSS display 명령으로 적용가능 </li>
  <li>크기, 여백 적용 가능</li>
  <li>줄 바꿈 되지 않고 옆으로 나열</li>
  <li>인라인-블록 요소 사이 기본 공백 포함</li>
</ul>
<h3>요소의 너비와 높이 주기</h3>
<p>너비와 높이 주기 전에 reset.css 파일 맨 위에 <strong>* {box-sizing:border-box;} </strong>가 있어야 함</p>
<p>기본 크기에서 너비와 높이를 주면 크기가 다 제각각으로 바뀔 때 알아서 계산해서 사이즈 값을 자동 조정해주는 태그</p>
<ul>테두리
  <li>width = 너비</li>
  <li>단위 : % = 상대값, px = 절대값</li>
</ul>
<ul>
  <li>height = 높이</li>
  <li>단위 : % = 상대값, px = 절대값</li>
</ul>
<ul>
  <li>padding : 글자에 딱 맞게 네모를 잡고 바깥으로 뻗은 여백</li>
  <li>margin : 버튼같이 상자 안에 글이 있을때 안으로 뻗은 여백</li>
  <li>단위 = px</li>
  <li>1개 입력 = 상,하,좌,우</li>
  <li>2개 입력 = 상하, 좌우</li>
  <li>3개 입력 = 상, 좌우, 하</li>
  <li>4개 입력 = (시계방향)상, 우, 좌, 하</li>
</ul>
<ul>블럭모양으로 잡힌 네모에서 동그라미로 만드는 방법
  <li>네모를 반으로 나누어서 나온 넓이 값=4분할해서 모서리를 둥글게를 준다는 느낌</li>
  <li>예시 ) border-radius:125px</li>
  <li>border-radius:50% <br> 이 방법 사용하려면 가로세로 크기가 일정해야함</li>
</ul>
<ul>이미지크기조정
  <li>높이와 너비 중 하나만 적어도 이미지는 고정값(비율)이 있기 때문에 알아서 달라짐</li>
</ul>

<br>
<h2>23.02.25 - HTML, CSS 복습</h2>
<p>글꼴은 디자인 css 파일에 등록해야 한다. relgular는 기본값</p>
<h3>글씨에 관련된 선택자 스타일 값!</h3>
<p>글씨의 단위는 rem (절대값)</p>
<p><strong>폰트 선택자에 대한 보편적으로 사용하는 값</strong><br>
font-family , font-size , line-height(행간,양수), letter-spacing(자간,음수)</p>
<p>line-height = 행간</p>
<p>letter-spacing = 자간</p>
<p>word-spacing = 단어 사이 간격</p>
<p>font-weight = 글꼴 굵기</p>
<p>font-style:italic; = 기울기</p>
<p><strong>대 소문자 변경법</strong><br>
  text-transform:<em>lowercase(소문자)</em><em>uppercase(대문자)</em><em>capitalize(앞만 대문자)</em>
</p>
<p>text-decoration:underline; = 밑줄</p>
<p>text-decoration:line-through; = 취소선</p>
<h3>display 요소 표시 속성 3가지</h3>
<p>block</p>
<p>inline</p>
<p>inline-block</p>
<p><em>세가지 속성에 대해 정확하게 알기</em></p>
<h3>margin-바깥쪽 여백, padding-안쪽여백</h3>
<p>margin - 요소로부터의 바깥쪽</p>
<p>padding - (선택박스처럼)요소 바깥에서부터 요소까지! </p>

<h2>23.02.26 - html 복습</h2>
<h3>html - 표태그 , table, thead, tbody,tfoot, <strong>th(제목),tr(행),td(열)</strong></h3>
<p>ul-li 관계 처럼 tr(행) 안에 th, td 가 들어간다고 생각하기</p>
<p><strong>tr(행)이 한줄씩 구성되며 표가 만들어지는 것임! 그래서 제목인 th 가 1개이상은 들어가야하는 것임</strong></p>
<p><sup>td는 p태그와 같은 성질 =  td의 제목열인 th를 넣어주어야함</sup></p>
<p>th 와 td를 무조건 tr에 넣는것이 아니라 표에서 제목이 들어가야하는 부분 th를 넣어야함. 최소 th 1개는 있어야함.</p>
<p>tfoot을 thead 바로 밑에 놓으면 스크린리더기에서 바로 총 수량이 나올것임(오류지만 무시하기)</p>
<ul>행/열 병합
  <li>th,td에 사용하는 속성</li>
  <li>속성 사용 후에는 내가 지우고자 하는 부분만큼 주석처리 또는 삭제</li>
  <li>colspan = 같은 행(tr) 병합 , (→ 옆방향)</li>
  <li>rowspan = 같은 열(th,td) 병합, (↓ 아래방향)</li>
</ul>
<ul>행과 열 범위 지정 &lt;th scope=""&gt;
  <li>스크린리더기를 위해 필요한 속성값임</li>
  <li><em>th</em>에만 사용함. &lt;td&gt;는 내용이기 때문에 안넣음</li>
  <li>표의 읽기 방향 설정 속성임</li>
  <li>col = 수직</li> 
  <li>row = 수평</li>
</ul>
<h3>form 양식</h3>
<p>&lt;form action="#" method=""&gt;&lt;/form&gt;</p>
<p>&lt;fieldset&gt;&lt;legend&gt;그룹제목&lt;/legend&gt;&lt;/fieldset&gt; - form 안에 들어가는 기본 태그</p>
<p>&lt;input type=속성 &gt;</p>
<p><sup>type에는 입력양식, 선택양식 이 있음</sup></p>
<ul>입력양식일 경우 사용할 수 있는 속성은?
  <li>name</li>
  <li>readonly = 약관같은거</li>
  <li>maxlength</li>
  <li>placeholder</li>
  <li>value = 이거쓰면 칸에서 안지워짐</li>
  <li>autofocus = 한페이지당 하나 자동커서</li>  
</ul>
<ul>선택양식일 경우 사용할 수 있는 속성은?
  <li>name</li>
  <li>checked = 미리선택</li>
  <li>value = 데이터구분목적명칭</li>
</ul>
<p>&lt;label&gt; 편의기능 = 글자클릭해도 선택되는거</p>
<ul>목록 select, option
  <li>쇼핑몰에서 자주 사용되는 것</li>
  <li>선택양식임 그래서 속성도 같이 사용 가능</li>
  <li></li>
</ul>
<ul>&lt;button type="<em>submit</em>"&gt;&lt;/button&gt;
  <li>submit = 양식 전송</li>
  <li>reset = 초기화</li>
  <li>button = 다양한 용도사용</li>
  <li></li>
</ul>

<hr>

<h2>23.02.27 - css , test</h2>
<h3>float 기본과 활용 </h3>
<sup>기본적인 모양을 알아야함.</sup>
<ul>float 위치설정
  <li>float:left</li>
  <li>float:right (역순배치)</li>
  <li>rloat:none;</li>
</ul>
<ul>float 위치제거
  <li>clear:both;</li>
</ul>
<p>float 특성 상 부유효과가 있음<br> 즉 부모의 높이가 따로 안 들어가면 부모높이인식이 안됨 </p>
<p>이를 위해 세가지 부유효과 제거 방법이 있음</p>
<ul>
  <li>높이 설정하기 = 부모 {height:px}</li>
  <li>가상클래스 선택자 생성 = 부모:after {content:""; display:block; clear:both;}</li>
  <li>영역 인식 =  부모 {overflow:hidden;}</li>
</ul>

<hr>

<h2>23.02.28 - css </h2>
<p>내가 원하는 박스(시멘틱태그=피그마에서 그룹)를 가운데로 옮기고 싶을때는</p>
<p>margin:0 auto; = 사용자가 보고 있는 크기가 얼마일지 모르기 때문에 자동 계산 되는 auto 사용</p>
<sup>블록태그일 경우만 가능. 인라인은 크기랑 여백 인식 못해서</sup>
<ul>글자를 가운데로 옮기고 싶을 땐?
  <li>선택자에게 text-align:center 삽입 <br> <q>이 수식은 인라인에게 영향을 주는 값</q></li>
  <li>이건 inline 가운데 정렬임 / 즉 수평으로만 가운데 (수직가운데도 줘야지 블럭의 한 가운데 있을 수 있음)
    <ul>중앙으로 오기 위해서는
      <li>line-height:100px (100은 블럭의 height 만큼) </li>
      <li><sup>주의점! 글이 한줄일때만 ! 행간값으로 줌 </sup></li>
    </ul>
  </li>
</ul>

<p>도형 겹치게 두려면 margin 값을 음수로 주기</p>

<p>
  <strong>
    <ul>정확하게 이해해야함!
      <li><sup>블럭태그 위치 선정을 할때 필요한 값들</sup></li>
      <li>글자수가 다를 때 = float , 글자 수가 같을 때 = inline block</li>
      <li>왜냐? inline 특성상 내용만큼 인식, 글자수가 다르면 이상해짐 , 그래서 똑같은 효과를 주려고 float를 씀</li>
      <li>
        float를 쓰면 반자동적으로 overflow:hidden; 이 부모에 주어져야하는데 여기서! 같은 기능을 하는 것은!<br>
        부모에게 display:inline-block를 주는 것도 가능! (자식이 아닌 부모!)
      </li>
    </ul>
  </strong>
</p>
  
<h3>메뉴 사이 여백</h3>
<p>메뉴의 왼쪽에 여백을 준다 = padding-left</p>
<p>이렇게 되면 마지막 메뉴에도 필요없는 여백이 생기니 제거해야함</p>
<p>개별 선택자를 만들어서 padding 값을 0 을 주어야함.</p>

<h3>수열선택자</h3>
<ul>종류1. 부모의 배치된 형제 순서에 따라 대상선택 <br>/ 원하는 대상을 a에 놓고 부모기준으로 n을 적기
  <li>a:nth-child(n) = a는 형제를 선택</li>
  <li><sup>여기서 자식이 외동인 경우에는 부모를 a에 적기</sup></li>
  <li>first-child (자동으로 첫번째 자식 선택)</li>
  <li>last-child (자동으로 마지막 자식 선택)</li>
  <li>nth-last-child(n) (마지막에서 n번째 자식 선택)</li>
  <li>nth-child(even/odd/3n+1)
    <ul>
      <li>even = 짝수</li>
      <li>odd = 홀수</li>
      <li>an = a의 배수</li>
      <li>an+1 = a의 배수인데 무조건 a부터 시작이 아니라 1번부터 시작 (숫자가 배수의 시작점을 뜻함)</li>
    </ul>
  </li>
</ul>
<ul>종류2. 형제그룹사이에서 자신과 동일한 요소만 보고 순서 선택
  <li>a:nth-of-type(n) = a랑 똑같은 태그 순서대로 n에 적기</li>
  <li>first-of-type</li>
  <li>last-of-type </li>
  <li>ath-last-of-type(n) = a와 동일요소에서 마지막에서부터 n번째 선택</li>
</ul>

<h2>23.03.02 -  CSS 총 정리</h2>
<h2>23.03.03 - 위치속성, </h2>
<h2>23.03.04 - GTQ</h2>
