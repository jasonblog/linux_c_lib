function initCFuncs () {
	// add function to link
	$("#menu > div > div > a").bind('click', function alerttext () {
		// alert($(this).text());
		// add a tab
		if (opened_tabs[$(this).text()] === undefined || opened_tabs[$(this).text()] == 'false') {
			$('#tabs').tabs("add", "#"+$(this).text(), $(this).text());
			opened_tabs[$(this).text()] = 'true';
		}
		$('#tabs').tabs("select", $(this).text());
	});
}

var opened_tabs={};

var func_html = {
'isalnum_html' : ' \
<tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isalnum（測試字元是否為英文或數位） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isalpha，isdigit，islower，isupper<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isalnum (int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為英文字母或阿拉伯數字，在標準c中相當於使用“isalpha(c)  \
      || isdigit(c)”做測試。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為字母或數位，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 找出str 字串中為英文字母或數位的字元*/<br> \
      #include &lt; ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]=”123c@#FDsP[e?”;<br> \
      int i;<br> \
      for (i=0;str[i]!=0;i++ )<br> \
      if ( isalnum(str[i])) printf(“%c is an alphanumeric character\n”,str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 1 is an apphabetic character<br> \
      2 is an apphabetic character<br> \
      3 is an apphabetic character<br> \
      c is an apphabetic character<br> \
      F is an apphabetic character<br> \
      D is an apphabetic character<br> \
      s is an apphabetic character<br> \
      P is an apphabetic character<br> \
      e is an apphabetic character<br> \
      </font> </td> \
  </tr> \
',
'isalpha_html': ' \
<tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isalpha （測試字元是否為英文字母） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isalnum，islower，isupper<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isalpha (int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為英文字母，在標準c中相當於使用“isupper(c)||islower(c)”做測試。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為英文字母，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 找出str 字串中為英文字母的字元*/<br> \
      #include &lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]=”123c@#FDsP[e?”;<br> \
      int i;<br> \
      for (i=0;str[i]!=0;i++)<br> \
      if(isalpha(str[i])) printf(“%c is an alphanumeric character\n”,str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> c is an apphabetic character<br> \
      F is an apphabetic character<br> \
      D is an apphabetic character<br> \
      s is an apphabetic character<br> \
      P is an apphabetic character<br> \
      e is an apphabetic character<br> \
      </font> </td> \
  </tr> \
',
'isascii_html': ' \
<tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isascii（測試字元是否為ASCII 碼字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> iscntrl<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isascii(int c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為ASCII碼字元，也就是判斷c的範圍是否在0到127之間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為ASCII碼字元，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 判斷int i是否具有對映的ASCII碼字元*/<br> \
      #include&lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      int i;<br> \
      for(i=125;i&lt;130;i++)<br> \
      if(isascii(i))<br> \
      printf("%d is an ascii character:%c\n",i,i);<br> \
      else<br> \
      printf("%d is not an ascii character\n",i);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 125 is an ascii character:}<br> \
      126 is an ascii character:~<br> \
      127 is an ascii character:<br> \
      128 is not an ascii character<br> \
      129 is not an ascii character<br> \
      </font> </td> \
  </tr> \
',
'iscntrl_html' : ' \
<tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      iscntrl（測試字元是否為ASCII 碼的控制字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isascii<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int iscntrl(int c)；<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為ASCII控制碼，也就是判斷c的範圍是否在0到30之間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為ASCII控制碼，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
',
'isdigit_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isdigit（測試字元是否為阿拉伯數字） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isxdigit<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isdigit(int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為阿拉伯數字0到9。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為阿拉伯數字，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 找出str字串中為阿拉伯數字的字元*/<br> \
      #include&lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]="123@#FDsP[e?";<br> \
      int i;<br> \
      for(i=0;str[i]!=0;i++)<br> \
      if(isdigit(str[i])) printf("%c is an digit character\n",str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 1 is an digit character<br> \
      2 is an digit character<br> \
      3 is an digit character<br> \
      </font> </td> \
  </tr> \
',
'isgraphis_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isgraphis（測試字元是否為可列印字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isprint<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isgraph (int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為可列印字元，若c所對映的ASCII碼可列印，且非空格字元則返回TRUE。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為可列印字元，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 判斷str字串中哪些為可列印字元*/<br> \
      #include&lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]="a5 @;";<br> \
      int i;<br> \
      for(i=0;str[i]!=0;i++)<br> \
      if(isgraph(str[i])) printf("str[%d] is printable character:%d\n",i,str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> str[0] is printable character:a<br> \
      str[1] is printable character:5<br> \
      str[3] is printable character:@<br> \
      str[4] is printable character:;<br> \
      </font> </td> \
  </tr> \
',
'islower_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      islower（測試字元是否為小寫字母） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isalpha，isupper<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int islower(int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為小寫英文字母。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為小寫英文字母，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]="123@#FDsP[e?";<br> \
      int i;<br> \
      for(i=0;str[i]!=0;i++)<br> \
      if(islower(str[i])) printf("%c is a lower-case character\n",str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> c is a lower-case character<br> \
      s is a lower-case character<br> \
      e is a lower-case character<br> \
      </font> </td> \
  </tr> \
',
'isprint_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isprint（測試字元是（否為可列印字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isgraph<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isprint(int c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為可列印字元，若c所對映的ASCII碼可列印，其中包含空格字元，則返回TRUE。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為可列印字元，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 判斷str字串中哪些為可列印字元包含空格字元*/<br> \
      #include&lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]="a5 @;";<br> \
      int i;<br> \
      for(i=0;str[i]!=0;i++)<br> \
      if(isprint(str[i])) printf("str[%d] is printable character:%d\n",i,str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> str[0] is printable character:a<br> \
      str[1] is printable character:5<br> \
      str[2] is printable character:<br> \
      str[3] is printable character:@<br> \
      str[4] is printable character:;<br> \
      </font> </td> \
  </tr> \
',
'isspace_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isspace（測試字元是否為空格字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isgraph<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isspace(int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為空格字元，也就是判斷是否為空格("")、定位字元("\t")、CR("\r")、換行("\n")、垂直定位字元("\v")或翻頁("\f")的情況。 \
<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為空格字元，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /*將字串str[]中內含的空格字元找出，並顯示空格字元的ASCII碼*/<br> \
      #include &lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str="123c @# FD\tsP[e?\n";<br> \
      int i;<br> \
      for(i=0;str[i]!=0;i++)<br> \
      if(isspace(str[i]))<br> \
      printf("str[%d] is a white-space character:%d\n",i,str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> str[4] is a white-space character:32<br> \
      str[7] is a white-space character:32<br> \
      str[10] is a white-space character:9 /* \t */<br> \
      str[16] is a white-space character:10 /* \t */<br> \
      </font> </td> \
  </tr> \
',
'ispunct_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      ispunct（測試字元是否為標點符號或特殊符號） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isspace，isdigit，isalpha<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #inlude&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int ispunct(int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為標點符號或特殊符號。返回TRUE也就是代表參數c為非空格、非數位和非英文字母。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> v若參數c為標點符號或特殊符號，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /*列出字串str中的標點符號或特殊符號*/<br> \
      #include &lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]="123c@ #FDsP[e?";<br> \
      int i;<br> \
      for(i=0;str[i]!=0;i++)<br> \
      if(ispunct(str[i])) printf("%c\n",str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> v<br> \
      @#[?<br> \
      </font> </td> \
  </tr> \
', 
'isupper_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isupper（測試字元是否為大寫英文字母） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isalpha，islower<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isupper(int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為大寫英文字母。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為大寫英文字母，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /*找出字串str中為大寫英文字母的字元*/<br> \
      #include &lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]="123c@#FDsP[e?";<br> \
      int i;<br> \
      for(i=0;str[i]!=0;i++)<br> \
      if(isupper(str[i])) printf("%c is an uppercase character\n",str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> F is an uppercase character<br> \
      D is an uppercase character<br> \
      P is an uppercase character<br> \
      </font> </td> \
  </tr> \
',
'isxdigit_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      isxdigit（測試字元是否為16進制數字） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isalnum，isdigit<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int isxdigit (int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 檢查參數c是否為16進制數字，只要c為下列其中一個情況則返回TRUE。16進制數字:0123456789ABCDEF。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為16進制數字，則返回TRUE，否則返回NULL(0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此為巨集定義，非真正函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /*找出字串str中為十六進位數位的字元*/<br> \
      #include &lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char str[]="123c@#FDsP[e?";<br> \
      int i;<br> \
      for(i=0;str[i]!=0;i++)<br> \
      if(isxdigit(str[i])) printf("%c is a hexadecimal digits\n",str[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 1 is a hexadecimal digits<br> \
      2 is a hexadecimal digits<br> \
      3 is a hexadecimal digits<br> \
      c is a hexadecimal digits<br> \
      F is a hexadecimal digits<br> \
      D is a hexadecimal digits<br> \
      e is a hexadecimal digits<br> \
      </font> </td> \
  </tr> \
',
'atof_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      atof（將字串轉換成浮點型數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atoi，atol，strtod，strtol，strtoul<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double atof(const char *nptr);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atof()會掃描參數nptr字串，跳過前面的空格字元，直到遇上數位或正負符號才開始做轉換，而再遇到非數位或字串結束時("\0")才結束轉換，並將結果返回。參數nptr字串可包含正負號、小數點或E(e)來表示指數部分，如123.456或123e-2。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回轉換後的浮點型數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atof()與使用strtod(nptr,(char**)NULL)結果相同。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 將字串a 與字串b轉換成數位後相加*/<br> \
      #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      char *a=”-100.23”;<br> \
      char *b=”200e-2”;<br> \
      float c;<br> \
      c=atof(a)+atof(b);<br> \
      printf(“c=%.2f\n”,c);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> c=-98.23<br> \
      </font> </td> \
  </tr> \
',
'atoi_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      atoi（將字串轉換成整型數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atof，atol，atrtod，strtol，strtoul<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int atoi(const char *nptr);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atoi()會掃描參數nptr字串，跳過前面的空格字元，直到遇上數位或正負符號才開始做轉換，而再遇到非數位或字串結束時("\0")才結束轉換，並將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回轉換後的整型數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atoi()與使用strtol(nptr，(char**)NULL，10)；結果相同。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 將字串a 與字串b轉換成數位後相加*/<br> \
      #include&lt;stdlib.h&gt;<br> \
      mian()<br> \
      {<br> \
      char a[]=”-100”;<br> \
      char b[]=”456”;<br> \
      int c;<br> \
      c=atoi(a)+atoi(b);<br> \
      printf(c=%d\n”,c);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> c=356<br> \
      </font> </td> \
  </tr> \
',
'atol_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      atol（將字串轉換成長整型數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atof，atoi，strtod，strtol，strtoul<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> long atol(const char *nptr);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atol()會掃描參數nptr字串，跳過前面的空格字元，直到遇上數位或正負符號才開始做轉換，而再遇到非數位或字串結束時("\0")才結束轉換，並將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回轉換後的長整型數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atol()與使用strtol(nptr,(char**)NULL,10)；結果相同。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /*將字串a與字串b轉換成數位後相加*/<br> \
      #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      char a[]=”1000000000”;<br> \
      char b[]=” 234567890”;<br> \
      long c;<br> \
      c=atol(a)+atol(b);<br> \
      printf(“c=%d\n”,c);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> c=1234567890<br> \
      </font> </td> \
  </tr> \
',
'gcvt_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      gcvt（將浮點型數轉換為字串，取四捨五入） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ecvt，fcvt，sprintf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char *gcvt(double number，size_t  \
      ndigits，char *buf);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> gcvt()用來將參數number轉換成ASCII碼字串，參數ndigits表示顯示的位元數。gcvt()與ecvt()和fcvt()不同的地方在於，gcvt()所轉換後的字串包含小數點或正負符號。若轉換成功，轉換後的字串會放在參數buf指針所指的空間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回一字串指標，此位址即為buf指針。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      double a=123.45;<br> \
      double b=-1234.56;<br> \
      char *ptr;<br> \
      int decpt,sign;<br> \
      gcvt(a,5,ptr);<br> \
      printf(“a value=%s\n”,ptr);<br> \
      ptr=gcvt(b,6,ptr);<br> \
      printf(“b value=%s\n”,ptr);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> a value=123.45<br> \
		b value=-1234.56<br> \
      </font> </td> \
  </tr> \
',
'strtod_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strtod（將字串轉換成浮點數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atoi，atol，strtod，strtol，strtoul<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double strtod(const char *nptr,char  \
      **endptr);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strtod()會掃描參數nptr字串，跳過前面的空格字元，直到遇上數位或正負符號才開始做轉換，到出現非數位或字串結束時("\0")才結束轉換，並將結果返回。若endptr不為NULL，則會將遇到不合條件而終止的nptr中的字元指標由endptr傳回。參數nptr字串可包含正負號、小數點或E(e)來表示指數部分。如123.456或123e-2。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回轉換後的浮點型數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考atof()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /*將字串a，b，c 分別採用10，2，16 進制轉換成數位*/<br> \
      #include&lt;stdlib.h&gt;<br> \
      mian()<br> \
      {<br> \
      char a[]=”1000000000”;<br> \
      char b[]=”1000000000”;<br> \
      char c[]=”ffff”;<br> \
      printf(“a=%d\n”,strtod(a,NULL,10));<br> \
      printf(“b=%d\n”,strtod(b,NULL,2));<br> \
      printf(“c=%d\n”,strtod(c,NULL,16));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> a=1000000000<br> \
      b=512<br> \
      c=65535<br> \
      </font> </td> \
  </tr> \
',
'strtol_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strtol（將字串轉換成長整型數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atof，atoi，atol，strtod，strtoul<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> long int strtol(const char *nptr,char  \
      **endptr,int base);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strtol()會將參數nptr字串根據參數base來轉換成長整型數。參數base範圍從2至36，或0。參數base代表採用的進制方式，如base值為10則採用10進制，若base值為16則採用16進制等。當base值為0時則是採用10進制做轉換，但遇到如"0x"前置字元則會使用16進制做轉換。一開始strtol()會掃描參數nptr字串，跳過前面的空格字元，直到遇上數位或正負符號才開始做轉換，再遇到非數位或字串結束時("\0")結束轉換，並將結果返回。若參數endptr不為NULL，則會將遇到不合條件而終止的nptr中的字元指標由endptr返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回轉換後的長整型數，否則返回ERANGE並將錯誤代碼存入errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ERANGE指定的轉換字串超出合法範圍。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 將字串a，b，c 分別採用10，2，16進制轉換成數位*/<br> \
      #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      char a[]=”1000000000”;<br> \
      char b[]=”1000000000”;<br> \
      char c[]=”ffff”;<br> \
      printf(“a=%d\n”,strtol(a,NULL,10));<br> \
      printf(“b=%d\n”,strtol(b,NULL,2));<br> \
      printf(“c=%d\n”,strtol(c,NULL,16));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> a=1000000000<br> \
      b=512<br> \
      c=65535<br> \
      </font> </td> \
  </tr> \
',
'strtoul_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strtoul（將字串轉換成無符號長整型數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atof，atoi，atol，strtod，strtol<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> unsigned long int strtoul(const  \
      char *nptr,char **endptr,int base);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strtoul()會將參數nptr字串根據參數base來轉換成無符號的長整型數。參數base範圍從2至36，或0。參數base代表採用的進制方式，如base值為10則採用10進制，若base值為16則採用16進制數等。當base值為0時則是採用10進制做轉換，但遇到如"0x"前置字元則會使用16進制做轉換。一開始strtoul()會掃描參數nptr字串，跳過前面的空格字串，直到遇上數位或正負符號才開始做轉換，再遇到非數位或字串結束時("\0")結束轉換，並將結果返回。若參數endptr不為NULL，則會將遇到不合條件而終止的nptr中的字元指標由endptr返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回轉換後的長整型數，否則返回ERANGE並將錯誤代碼存入errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ERANGE指定的轉換字串超出合法範圍。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考strtol()<br> \
      </font> </td> \
  </tr> \
',
'toascii_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      toascii（將整型數轉換成合法的ASCII 碼字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isascii，toupper，tolower<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int toascii(int c)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> toascii()會將參數c轉換成7位的unsigned char值，第八位則會被清除，此字元即會被轉成ASCII碼字元。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 將轉換成功的ASCII碼字元值返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      int a=217;<br> \
      char b;<br> \
      printf(“before toascii () : a value =%d(%c)\n”,a,a);<br> \
      b=toascii(a);<br> \
      printf(“after toascii() : a value =%d(%c)\n”,b,b);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> before toascii() : a value =217()<br> \
      after toascii() : a value =89(Y)<br> \
      </font> </td> \
  </tr> \
',
'tolower_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      tolower（將大寫字母轉換成小寫字母） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isalpha，toupper<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int tolower(int c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為大寫字母則將該對應的小寫字母返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回轉換後的小寫字母，若不須轉換則將參數c值返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 將s字串內的大寫字母轉換成小寫字母*/<br> \
      #include&lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char s[]=”aBcDeFgH12345;!#$”;<br> \
      int i;<br> \
      printf(“before tolower() : %s\n”,s);<br> \
      for(i=0;I&lt;sizeof(s);i++)<br> \
      s[i]=tolower(s[i]);<br> \
      printf(“after tolower() : %s\n”,s);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> before tolower() : aBcDeFgH12345;!#$<br> \
      after tolower() : abcdefgh12345;!#$<br> \
      </font> </td> \
  </tr> \
',
'toupper_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      toupper（將小寫字母轉換成大寫字母） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> isalpha，tolower<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;ctype.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int toupper(int c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數c為小寫字母則將該對映的大寫字母返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回轉換後的大寫字母，若不須轉換則將參數c值返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 將s字串內的小寫字母轉換成大寫字母*/<br> \
      #include&lt;ctype.h&gt;<br> \
      main()<br> \
      {<br> \
      char s[]=”aBcDeFgH12345;!#$”;<br> \
      int i;<br> \
      printf(“before toupper() : %s\n”,s);<br> \
      for(i=0;I&lt;sizeof(s);i++)<br> \
      s[i]=toupper(s[i]);<br> \
      printf(“after toupper() : %s\n”,s);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> before toupper() : aBcDeFgH12345;!#$<br> \
      after toupper() : ABCDEFGH12345;!#$<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'calloc_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      calloc（配置記憶體空間） </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> malloc，free，realloc，brk<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void *calloc(size_t nmemb，size_t  \
      size);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> calloc()用來配置nmemb個相鄰的記憶體單位，每一單位的大小為size，並返回指向第一個元素的指標。這和使用下列的方式效果相同:malloc(nmemb*size);不過，在利用calloc()配置記憶體時會將記憶體內容初始化為0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若配置成功則返回一指標，失敗則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 動態配置10個struct test 空間*/<br> \
      #include&lt;stdlib.h&gt;<br> \
      struct test<br> \
      {<br> \
      int a[10];<br> \
      char b[20];<br> \
      }<br> \
      main()<br> \
      {<br> \
      struct test *ptr=calloc(sizeof(struct test),10);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'free_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      free（釋放原先配置的記憶體） </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> malloc，calloc，realloc，brk<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void free(void *ptr);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參數ptr為指向先前由malloc()、calloc()或realloc()所返回的記憶體指標。調用free()後ptr所指的記憶體空間便會被收回。假若參數ptr所指的記憶體空間已被收回或是未知的記憶體位址，則調用free()可能會有無法預期的情況發生。若參數ptr為NULL，則free()不會有任何作用。<br> \
      </font> </td> \
  </tr> \
',
'getpagesize_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      getpagesize（取得記憶體分頁大小） </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sbrk<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> size_t getpagesize(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回一分頁的大小，單位為位元組（byte）。此為系統的分頁大小，不一定會和硬體分頁大小相同。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 記憶體分頁大小。附加說明在Intel x86 上其返回值應為4096bytes。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      printf(“page size = %d\n”,getpagesize( ) );<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'malloc_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      malloc（配置記憶體空間） </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> calloc，free，realloc，brk<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void * malloc(size_t size);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> malloc()用來配置記憶體空間，其大小由指定的size決定。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若配置成功則返回一指標，失敗則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void p = malloc(1024); /*配置1k的記憶體*/<br> \
      </font> </td> \
  </tr> \
',
'mmap_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      mmap（建立記憶體映射） </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> munmap，open<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;unistd.h&gt;<br> \
      #include &lt;sys/mman.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void *mmap(void *start,size_t  \
      length,int prot,int flags,int fd,off_t offsize);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> mmap()用來將某個檔內容映射到記憶體中，對該記憶體區域的存取即是直接對該檔內容的讀寫。參數start指向欲對應的記憶體起始位址，通常設為NULL，代表讓系統自動選定位址，對應成功後該位址會返回。參數length代表將檔中多大的部分對應到記憶體。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> prot代表映射區域的保護方式有下列組合<br> \
      PROT_EXEC 映射區域可被執行<br> \
      PROT_READ 映射區域可被讀取<br> \
      PROT_WRITE 映射區域可被寫入<br> \
      PROT_NONE 映射區域不能存取<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> flags會影響映射區域的各種特性<br> \
      MAP_FIXED 如果參數start所指的位址無法成功建立映射時，則放棄映射，不對位址做修正。通常不鼓勵用此旗標。<br> \
      MAP_SHARED對映射區域的寫入資料會複製回檔內，而且允許其他映射該檔的進程共用。<br> \
      MAP_PRIVATE 對映射區域的寫入操作會產生一個映射檔的複製，即私人的“寫入時複製”（copy on write）對此區域作的任何修改都不會寫回原來的檔內容。<br> \
      MAP_ANONYMOUS建立匿名映射。此時會忽略參數fd，不涉及檔，而且映射區域無法和其他進程共用。<br> \
      MAP_DENYWRITE只允許對映射區域的寫入操作，其他對檔直接寫入的操作將會被拒絕。<br> \
      MAP_LOCKED 將映射區域鎖定住，這表示該區域不會被置換（swap）。<br> \
      在調用mmap()時必須要指定MAP_SHARED 或MAP_PRIVATE。參數fd為open()返回的檔描述詞，代表欲映射到記憶體的檔。參數offset為檔映射的偏移量，通常設置為0，代表從檔最前方開始對應，offset必須是分頁大小的整數倍。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若映射成功則返回映射區的記憶體起始位址，否則返回MAP_FAILED(－1)，錯誤原因存於errno  \
      中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數fd 不是有效的檔描述詞<br> \
      EACCES 存取許可權有誤。如果是MAP_PRIVATE 情況下檔必須可讀，使用MAP_SHARED則要有PROT_WRITE以及該檔要能寫入。<br> \
      EINVAL 參數start、length 或offset有一個不合法。<br> \
      EAGAIN 檔被鎖住，或是有太多記憶體被鎖住。<br> \
      ENOMEM 記憶體不足。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 利用mmap()來讀取/etc/passwd 檔內容*/<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      #include&lt;sys/mman.h&gt;<br> \
      main()<br> \
      {<br> \
      int fd;<br> \
      void *start;<br> \
      struct stat sb;<br> \
      fd=open(“/etc/passwd”,O_RDONLY); /*打開/etc/passwd*/<br> \
      fstat(fd,&sb); /*取得檔大小*/<br> \
      start=mmap(NULL,sb.st_size,PROT_READ,MAP_PRIVATE,fd,0);<br> \
      if(start= = MAP_FAILED) /*判斷是否映射成功*/<br> \
      return;<br> \
      printf(“%s”,start);<br> \
      munma(start,sb.st_size); /*解除映射*/<br> \
      closed(fd);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> root : x : 0 : root : /root :  \
      /bin/bash<br> \
      bin : x : 1 : 1 : bin : /bin :<br> \
      daemon : x : 2 : 2 :daemon : /sbin<br> \
      adm : x : 3 : 4 : adm : /var/adm :<br> \
      lp : x :4 :7 : lp : /var/spool/lpd :<br> \
      sync : x : 5 : 0 : sync : /sbin : bin/sync :<br> \
      shutdown : x : 6 : 0 : shutdown : /sbin : /sbin/shutdown<br> \
      halt : x : 7 : 0 : halt : /sbin : /sbin/halt<br> \
      mail : x : 8 : 12 : mail : /var/spool/mail :<br> \
      news : x :9 :13 : news : /var/spool/news :<br> \
      uucp : x :10 :14 : uucp : /var/spool/uucp :<br> \
      operator : x : 11 : 0 :operator : /root:<br> \
      games : x : 12 :100 : games :/usr/games:<br> \
      gopher : x : 13 : 30 : gopher : /usr/lib/gopher-data:<br> \
      ftp : x : 14 : 50 : FTP User : /home/ftp:<br> \
      nobody : x :99: 99: Nobody : /:<br> \
      xfs :x :100 :101 : X Font Server : /etc/xll/fs : /bin/false<br> \
      gdm : x : 42 :42 : : /home/gdm: /bin/bash<br> \
      kids : x : 500 :500 :/home/kids : /bin/bash<br> \
      </font> </td> \
  </tr> \
',
'munmap_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      munmap（解除記憶體映射） </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> mmap<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      #include&lt;sys/mman.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int munmap(void *start,size_t  \
      length);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> munmap()用來取消參數start所指的映射記憶體起始位址，參數length則是欲取消的記憶體大小。當進程結束或利用exec相關函數來執行其他程式時，映射記憶體會自動解除，但關閉對應的檔描述詞時不會解除映射。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 如果解除映射成功則返回0，否則返回－1，錯誤原因存於errno中錯誤代碼EINVAL<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> start或length 不合法。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考mmap（）<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'asctime_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      asctime（將時間和日期以字串格式表示） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time，ctime，gmtime，localtime<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * asctime(const struct tm  \
      * timeptr);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> asctime()將參數timeptr所指的tm結構中的資訊轉換成真實世界所使用的時間日期表示方法，然後將結果以字串形態返回。此函數已經由時區轉換成當地時間，字串格式為:“Wed  \
      Jun 30 21:49:08 1993\n”<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若再調用相關的時間日期函數，此字串可能會被破壞。此函數與ctime不同處在於傳入的參數是不同的結構。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回一字串表示目前當地的時間日期。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;time.h&gt;<br> \
      main()<br> \
      {<br> \
      time_t timep;<br> \
      time (&timep);<br> \
      printf(“%s”,asctime(gmtime(&timep)));<br> \
	  }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> Sat Oct 28 02:10:06 2000<br> \
      </font> </td> \
  </tr> \
',
'ctime_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      ctime（將時間和日期以字串格式表示） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time，asctime，gmtime，localtime<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char *ctime(const time_t *timep);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ctime()將參數timep所指的time_t結構中的資訊轉換成真實世界所使用的時間日期表示方法，然後將結果以字串形態返回。此函數已經由時區轉換成當地時間，字串格式為“Wed  \
      Jun 30 21 :49 :08 1993\n”。若再調用相關的時間日期函數，此字串可能會被破壞。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回一字串表示目前當地的時間日期。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      main()<br> \
      {<br> \
      time_t timep;<br> \
      time (&timep);<br> \
      printf(“%s”,ctime(&timep));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> Sat Oct 28 10 : 12 : 05 2000<br> \
      </font> </td> \
  </tr> \
',
'gettimeofday_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      gettimeofday（取得目前的時間） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time，ctime，ftime，settimeofday<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;sys/time.h&gt;<br> \
	#include &lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int gettimeofday ( struct timeval  \
      * tv , struct timezone * tz )<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> gettimeofday()會把目前的時間有tv所指的結構返回，當地時區的資訊則放到tz所指的結構中。<br> \
      timeval結構定義為:<br> \
      struct timeval{<br> \
      long tv_sec; /*秒*/<br> \
      long tv_usec; /*微秒*/<br> \
      };<br> \
      timezone 結構定義為:<br> \
      struct timezone{<br> \
      int tz_minuteswest; /*和Greenwich 時間差了多少分鐘*/<br> \
      int tz_dsttime; /*日光節約時間的狀態*/<br> \
      };<br> \
      上述兩個結構都定義在/usr/include/sys/time.h。tz_dsttime 所代表的狀態如下<br> \
      DST_NONE /*不使用*/<br> \
      DST_USA /*美國*/<br> \
      DST_AUST /*澳洲*/<br> \
      DST_WET /*西歐*/<br> \
      DST_MET /*中歐*/<br> \
      DST_EET /*東歐*/<br> \
      DST_CAN /*加拿大*/<br> \
      DST_GB /*大不列顛*/<br> \
      DST_RUM /*羅馬尼亞*/<br> \
      DST_TUR /*土耳其*/<br> \
      DST_AUSTALT /*澳洲（1986年以後）*/<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回－1，錯誤代碼存於errno。附加說明EFAULT指標tv和tz所指的記憶體空間超出存取許可權。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/time.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      main(){<br> \
      struct timeval tv;<br> \
      struct timezone tz;<br> \
      gettimeofday (&tv , &tz);<br> \
      printf(“tv_sec; %d\n”, tv,.tv_sec) ;<br> \
      printf(“tv_usec; %d\n”,tv.tv_usec);<br> \
      printf(“tz_minuteswest; %d\n”, tz.tz_minuteswest);<br> \
      printf(“tz_dsttime, %d\n”,tz.tz_dsttime);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> tv_sec: 974857339<br> \
      tv_usec:136996<br> \
      tz_minuteswest:-540<br> \
      tz_dsttime:0<br> \
      </font> </td> \
  </tr> \
',
'gmtime_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      gmtime（取得目前時間和日期） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time,asctime,ctime,localtime<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> struct tm*gmtime(const time_t*timep);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> gmtime()將參數timep 所指的time_t 結構中的資訊轉換成真實世界所使用的時間日期表示方法，然後將結果由結構tm返回。<br> \
      結構tm的定義為<br> \
      struct tm<br> \
      {<br> \
      int tm_sec;<br> \
      int tm_min;<br> \
      int tm_hour;<br> \
      int tm_mday;<br> \
      int tm_mon;<br> \
      int tm_year;<br> \
      int tm_wday;<br> \
      int tm_yday;<br> \
      int tm_isdst;<br> \
      };<br> \
      int tm_sec 代表目前秒數，正常範圍為0-59，但允許至61秒<br> \
      int tm_min 代表目前分數，範圍0-59<br> \
      int tm_hour 從午夜算起的時數，範圍為0-23<br> \
      int tm_mday 目前月份的日數，範圍01-31<br> \
      int tm_mon 代表目前月份，從一月算起，範圍從0-11<br> \
      int tm_year 從1900 年算起至今的年數<br> \
      int tm_wday 一星期的日數，從星期一算起，範圍為0-6<br> \
      int tm_yday 從今年1月1日算起至今的天數，範圍為0-365<br> \
      int tm_isdst 日光節約時間的旗標<br> \
      此函數返回的時間日期未經時區轉換，而是UTC時間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回結構tm代表目前UTC 時間<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;time.h&gt;<br> \
      main(){<br> \
      char *wday[]={"Sun","Mon","Tue","Wed","Thu","Fri","Sat"};<br> \
      time_t timep;<br> \
      struct tm *p;<br> \
      time(&timep);<br> \
      p=gmtime(&timep);<br> \
      printf(“%d%d%d”,(1900+p-&gt;tm_year), (1+p-&gt;tm_mon),p-&gt;tm_mday);<br> \
      printf(“%s%d;%d;%d\n”, wday[p-&gt;tm_wday], p-&gt;tm_hour, p-&gt;tm_min,  \
      p-&gt;tm_sec);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 2000/10/28 Sat 8:15:38<br> \
      </font> </td> \
  </tr> \
',
'localtime_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      localtime（取得當地目前時間和日期） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time, asctime, ctime, gmtime<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> struct tm *localtime(const time_t  \
      * timep);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> localtime()將參數timep所指的time_t結構中的資訊轉換成真實世界所使用的時間日期表示方法，然後將結果由結構tm返回。結構tm的定義請參考gmtime()。此函數返回的時間日期已經轉換成當地時區。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回結構tm代表目前的當地時間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      main(){<br> \
      char *wday[]={“Sun”,”Mon”,”Tue”,”Wed”,”Thu”,”Fri”,”Sat”};<br> \
      time_t timep;<br> \
      struct tm *p;<br> \
      time(&timep);<br> \
      p=localtime(&timep); /*取得當地時間*/<br> \
      printf (“%d%d%d ”, (1900+p-&gt;tm_year),( l+p-&gt;tm_mon), p-&gt;tm_mday);<br> \
      printf(“%s%d:%d:%d\n”, wday[p-&gt;tm_wday],p-&gt;tm_hour, p-&gt;tm_min,  \
      p-&gt;tm_sec);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 2000/10/28 Sat 11:12:22<br> \
      </font> </td> \
  </tr> \
',
'mktime_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      mktime（將時間結構資料轉換成經過的秒數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time，asctime，gmtime，localtime<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time_t mktime(strcut tm * timeptr);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> mktime()用來將參數timeptr所指的tm結構資料轉換成從西元1970年1月1日0時0分0  \
      秒算起至今的UTC時間所經過的秒數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回經過的秒數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 用time()取得時間（秒數），利用localtime()<br> \
      轉換成struct tm 再利用mktine（）將struct tm轉換成原來的秒數*/<br> \
      #include&lt;time.h&gt;<br> \
      main()<br> \
      {<br> \
      time_t timep;<br> \
      strcut tm *p;<br> \
      time(&timep);<br> \
      printf(“time() : %d \n”,timep);<br> \
      p=localtime(&timep);<br> \
      timep = mktime(p);<br> \
      printf(“time()-&gt;localtime()-&gt;mktime():%d\n”,timep);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time():974943297<br> \
      time()-&gt;localtime()-&gt;mktime():974943297<br> \
      </font> </td> \
  </tr> \
',
'settimeofday_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      settimeofday（設置目前時間） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time，ctime，ftime，gettimeofday<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/time.h&gt;<br> \
		#include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr>   \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int settimeofday ( const struct  \
      timeval *tv,const struct timezone *tz);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> settimeofday()會把目前時間設成由tv所指的結構資訊，當地時區資訊則設成tz所指的結構。詳細的說明請參考gettimeofday()。注意，只有root許可權才能使用此函數修改時間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回－1，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EPERM 並非由root許可權調用settimeofday（），許可權不夠。<br> \
      EINVAL 時區或某個資料是不正確的，無法正確設置時間。<br> \
      </font> </td> \
  </tr> \
',
'time_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      time（取得目前的時間） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ctime，ftime，gettimeofday<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> time_t time(time_t *t);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 此函數會返回從西元1970年1月1日的UTC時間從0時0分0秒算起到現在所經過的秒數。如果t  \
      並非空指標的話，此函數也會將返回值存到t指標所指的記憶體。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回秒數，失敗則返回((time_t)-1)值，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;time.h&gt;<br> \
      mian()<br> \
      {<br> \
      int seconds= time((time_t*)NULL);<br> \
      printf(“%d\n”,seconds);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 9.73E+08<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'bcmp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      bcmp（比較記憶體內容） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcmp，strcasecmp，strcmp，strcoll，strncmp，strncasecmp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int bcmp ( const void *s1,const  \
      void * s2,int n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcmp()用來比較s1和s2所指的記憶體區間前n個位元組，若參數n為0，則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數s1 和s2 所指的記憶體內容都完全相同則返回0 值，否則返回非零值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 建議使用memcmp()取代。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考memcmp()。<br> \
      </font> </td> \
  </tr> \
',
'bcopy_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      bcopy（拷貝記憶體內容） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memccpy，memcpy，memmove，strcpy，ctrncpy<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void bcopy ( const void *src,void  \
      *dest ,int n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy()與memcpy()一樣都是用來拷貝src所指的記憶體內容前n個位元組到dest所指的位址，不過參數src與dest在傳給函數時是相反的位置。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 建議使用memcpy()取代<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char dest[30]=”string(a)”;<br> \
      char src[30]=”string\0string”;<br> \
      int i;<br> \
      bcopy(src,dest,30);/* src指針放在前*/<br> \
      printf(bcopy(): “)<br> \
      for(i=0;i&lt;30;i++)<br> \
      printf(“%c”,dest[i]);<br> \
      memcpy(dest src,30); /*dest指針放在錢*/<br> \
      printf(‘\nmemcpy() : “);<br> \
      for(i=0;i&lt;30;i++)<br> \
      printf(“%c”,dest[i]);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy() : string string<br> \
      memcpy() :string sring<br> \
      </font> </td> \
  </tr> \
',
'bzero_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      bzero（將一段記憶體內容全清為零） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memset，swab<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void bzero(void *s,int n)；<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bzero()會將參數s所指的記憶體區域前n個位元組，全部設為零值。相當於調用memset((void*)s,0,size_tn);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 建議使用memset取代<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考memset()。<br> \
      </font> </td> \
  </tr> \
',
'index_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      index（查找字串中第一個出現的指定字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> rindex，srechr，strrchr<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * index( const char *s, int  \
      c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> index()用來找出參數s字串中第一個出現的參數c位址，然後將該字元出現的位址返回。字串結束字元(NULL)也視為字串一部分。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 如果找到指定的字元則返回該字元所在地址，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *s =”0123456789012345678901234567890”;<br> \
      char *p;<br> \
      p =index(s,’5’);<br> \
      printf(%s\n”,p);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 5.68E+25<br> \
      </font> </td> \
  </tr> \
',
'memccpy_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      memccpy（拷貝記憶體內容） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy，memcpy，memmove，strcpy，strncpy<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void * memccpy(void *dest, const  \
      void * src, int c,size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memccpy()用來拷貝src所指的記憶體內容前n個位元組到dest所指的位址上。與memcpy()不同的是，memccpy()會在複製時檢查參數c是否出現，若是則返回dest中值為c的下一個位元組位址。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回指向dest中值為c的下一個位元組指標。返回值為0表示在src所指記憶體前n個位元組中沒有值為c的位元組。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char a[]="string[a]";<br> \
      char b[]="string(b)";<br> \
      memccpy(a,b,"B",sizeof(b));<br> \
      printf("memccpy():%s\n",a);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memccpy():string(b)<br> \
      </font> </td> \
  </tr> \
',
'memchr_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      memchr（在某一記憶體範圍中查找一特定字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> index，rindex，strchr，strpbrk，strrchr，strsep，strspn，strstr<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void * memchr(const void *s,int  \
      c,size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memchr()從頭開始搜尋s所指的記憶體內容前n個位元組，直到發現第一個值為c的位元組，則返回指向該位元組的指標。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 如果找到指定的位元組則返回該位元組的指標，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *s="0123456789012345678901234567890";<br> \
      char *p;<br> \
      p=memchr(s,"5",10);<br> \
      printf("%s\n",p);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 5.68E+25<br> \
      </font> </td> \
  </tr> \
',
'memcmp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      memcmp（比較記憶體內容） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcmp，strcasecmp，strcmp，strcoll，strncmp，strncasecmp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int memcmp (const void *s1,const  \
      void *s2,size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memcmp()用來比較s1和s2所指的記憶體區間前n個字元。字串大小的比較是以ASCII碼表上的順序來決定，次順序亦為字元的值。memcmp()首先將s1第一個字元值減去s2第一個字元的值，若差為0則再繼續比較下個字元，若差值不為0則將差值返回。例如，字串"Ac"和"ba"比較則會返回字元"A"(65)和"b"(98)的差值(－33)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數s1和s2所指的記憶體內容都完全相同則返回0值。s1若大於s2則返回大於0的值。s1若小於s2則返回小於0的值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *a ="aBcDeF";<br> \
      char *b="AbCdEf";<br> \
      char *c="aacdef";<br> \
      char *d="aBcDeF";<br> \
      printf("memcmp(a,b):%d\n",memcmp((void*)a,(void*) b,6));<br> \
      printf("memcmp(a,c):%d\n",memcmp((void*)a,(void*) c,6));<br> \
      printf("memcmp(a,d):%d\n",memcmp((void*)a,(void*) d,6));<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memcmp(a,b):1 /*字串a&gt;字串b，返回1*/<br> \
      memcmp(a,c):-1 /* 字串a&lt;字串c,返回－1*/<br> \
      memcmp(a,d):0 /*字串a＝字串d，返回0*/<br> \
      </font> </td> \
  </tr> \
',
'memcpy_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      memcpy（拷貝記憶體內容） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy，memccpy，memcpy，memmove，strcpy，strncpy<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void * memcpy (void * dest ,const  \
      void *src, size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memcpy()用來拷貝src所指的記憶體內容前n個位元組到dest所指的記憶體位址上。與strcpy()不同的是，memcpy()會完整的複製n個位元組，不會因為遇到字串結束"\0"而結束。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回指向dest的指標。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 指針src和dest所指的記憶體區域不可重疊。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char a[30]="string (a)";<br> \
      char b[30]="string\0string";<br> \
      int i;<br> \
      strcpy(a,b);<br> \
      printf("strcpy():");<br> \
      for(i=0;i&lt;30;i++)<br> \
      printf("%c",a[i]);<br> \
      memcpy(a,b,30);<br> \
      printf("\nmemcpy() :");<br> \
      for(i=0;i&lt;30;i++)<br> \
      printf("%c",a[i]);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcpy() : string a )<br> \
      memcpy() : string string<br> \
      </font> </td> \
  </tr> \
',
'memmove_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      memmove（拷貝記憶體內容） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy，memccpy，memcpy，strcpy，strncpy<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void * memmove(void *dest,const  \
      void *src,size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memmove()與memcpy()一樣都是用來拷貝src所指的記憶體內容前n個位元組到dest所指的位址上。不同的是，當src和dest所指的記憶體區域重疊時，memmove()仍然可以正確的處理，不過執行效率上會比使用memcpy()略慢些。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回指向dest的指標。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 指標src和dest所指的記憶體區域可以重疊。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考memcpy()。<br> \
      </font> </td> \
  </tr> \
',
'memset_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      memset（將一段記憶體空間填入某值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bzero，swab<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void * memset (void *s ,int c,  \
      size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> memset()會將參數s所指的記憶體區域前n個位元組以參數c填入，然後返回指向s的指標。在編寫程式時，若需要將某一陣列作初始化，memset()會相當方便。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回指向s的指標。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參數c雖聲明為int， 但必須是unsigned char  \
      ，所以範圍在0到255之間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char s[30];<br> \
      memset (s,"A",sizeof(s));<br> \
      s[30]="\0";<br> \
      printf("%s\n",s);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br> \
      </font> </td> \
  </tr> \
',
'rindex_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      rindex（查找字串中最後一個出現的指定字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> index，memchr，strchr，strrchr<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * rindex( const char *s,int  \
      c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> rindex()用來找出參數s字串中最後一個出現的參數c位址，然後將該字元出現的位址返回。字串結束字元(NULL)也視為字串一部分。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 如果找到指定的字元則返回該字元所在的位址，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      mian()<br> \
      {<br> \
      char *s ="0123456789012345678901234567890";<br> \
      char *p;<br> \
      p=rindex(s,"5");<br> \
      printf("%s\n",p);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 567890<br> \
      </font> </td> \
  </tr> \
',
'strcasecmp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strcasecmp（忽略大小寫比較字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcmp，memcmp，strcmp，strcoll，strncmp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int strcasecmp (const char *s1,  \
      const char *s2);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcasecmp()用來比較參數s1和s2字串，比較時會自動忽略大小寫的差異。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數s1和s2字串相同則返回0。s1長度大於s2長度則返回大於0  \
      的值，s1 長度若小於s2 長度則返回小於0的值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *a="aBcDeF";<br> \
      char *b="AbCdEf";<br> \
      if(!strcasecmp(a,b))<br> \
      printf("%s=%s\n",a,b);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> aBcDeF=AbCdEf<br> \
      </font> </td> \
  </tr> \
',
'strcat_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strcat（連接兩字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy，memccpy，memcpy，strcpy，strncpy<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char *strcat (char *dest,const  \
      char *src);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcat()會將參數src字串拷貝到參數dest所指的字串尾。第一個參數dest要有足夠的空間來容納要拷貝的字串。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數dest的字串起始位址<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h.&gt;<br> \
      main()<br> \
      {<br> \
      char a[30]="string(1)";<br> \
      char b[]="string(2)";<br> \
      printf("before strcat() : %s\n",a);<br> \
      printf("after strcat() : %s\n",strcat(a,b));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> before strcat () : string(1)<br> \
      after strcat () : string(1)string(2)<br> \
      </font> </td> \
  </tr> \
',
'strchr_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strchr（查找字串中第一個出現的指定字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> index，memchr，rinex，strbrk，strsep，strspn，strstr，strtok<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * strchr (const char *s,int  \
      c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strchr()用來找出參數s字串中第一個出現的參數c位址，然後將該字元出現的位址返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 如果找到指定的字元則返回該字元所在地址，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *s=0123456789012345678901234567890”;<br> \
      char *p;<br> \
      p=strchr(s,"5");<br> \
      printf("%s\n",p);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 5.68E+25<br> \
      </font> </td> \
  </tr> \
',
'strcmp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strcmp（比較字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcmp，memcmp，strcasecmp，strncasecmp，strcoll<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int strcmp(const char *s1,const  \
      char *s2);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcmp()用來比較參數s1和s2字串。字串大小的比較是以ASCII  \
      碼表上的順序來決定，此順序亦為字元的值。strcmp()首先將s1第一個字元值減去s2第一個字元值，若差值為0則再繼續比較下個字元，若差值不為0則將差值返回。例如字串"Ac"和"ba"比較則會返回字元"A"(65)和"b"(98)的差值(－33)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數s1和s2字串相同則返回0。s1若大於s2則返回大於0的值。s1若小於s2則返回小於0  \
      的值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *a="aBcDeF";<br> \
      char *b="AbCdEf";<br> \
      char *c="aacdef";<br> \
      char *d="aBcDeF";<br> \
      printf("strcmp(a,b) : %d\n",strcmp(a,b));<br> \
      printf("strcmp(a,c) : %d\n",strcmp(a,c));<br> \
      printf("strcmp(a,d) : %d\n",strcmp(a,d));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcmp(a,b) : 32<br> \
      strcmp(a,c) :-31<br> \
      strcmp(a,d) : 0<br> \
      </font> </td> \
  </tr> \
',
'strcoll_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strcoll（採用目前區域的字元排列次序來比較字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcmp，bcmp，memcmp，strcasecmp，strncasecmp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int strcoll( const char *s1, const  \
      char *s2);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcoll()會依環境變數LC_COLLATE所指定的文字排列次序來比較s1和s2  \
      字串。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數s1和s2字串相同則返回0。s1若大於s2則返回大於0的值。s1若小於s2則返回小於0  \
      的值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若LC_COLLATE為"POSIX"或"C"，則strcoll()與strcmp()作用完全相同。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考strcmp()。<br> \
      </font> </td> \
  </tr> \
',
'strcpy_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strcpy（拷貝字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy，memcpy，memccpy，memmove<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char *strcpy(char *dest,const  \
      char *src);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcpy()會將參數src字串拷貝至參數dest所指的地址。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數dest的字串起始位址。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 如果參數dest所指的記憶體空間不夠大，可能會造成緩衝溢出(buffer  \
      Overflow)的錯誤情況，在編寫程式時請特別留意，或者用strncpy()來取代。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char a[30]="string(1)";<br> \
      char b[]="string(2)";<br> \
      printf("before strcpy() :%s\n",a);<br> \
      printf("after strcpy() :%s\n",strcpy(a,b));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> before strcpy() :string(1)<br> \
      after strcpy() :string(2)<br> \
      </font> </td> \
  </tr> \
',
'strcspn_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strcspn（返回字串中連續不含指定字串內容的字元數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strspn<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #inclued&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> size_t strcspn ( const char *s,const  \
      char * reject);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcspn()從參數s字串的開頭計算連續的字元，而這些字元都完全不在參數reject  \
      所指的字串中。簡單地說，若strcspn()返回的數值為n，則代表字串s開頭連續有n個字元都不含字串reject內的字元。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回字串s開頭連續不含字串reject內的字元數目。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *str="Linux was first developed for 386/486-based pcs.";<br> \
      printf("%d\n",strcspn(str," "));<br> \
      printf("%d\n",strcspn(str,"/-"));<br> \
      printf("%d\n",strcspn(str,"1234567890"));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 5 /*只計算到“ ”的出現，所以返回“Linux”的長度*/<br> \
      33 /*計算到出現“/”或“－”，所以返回到“6”的長度*/<br> \
      30 /* 計算到出現數位字元為止，所以返回“3”出現前的長度*/<br> \
      </font> </td> \
  </tr> \
',
'strdup_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strdup（複製字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> calloc，malloc，realloc，free<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * strdup( const char *s);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strdup()會先用maolloc()配置與參數s字串相同的空間大小，然後將參數s字串的內容複製到該記憶體位址，然後把該位址返回。該位址最後可以利用free()來釋放。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回一字串指標，該指標指向複製後的新字串位址。若返回NULL表示記憶體不足。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char a[]="strdup";<br> \
      char *b;<br> \
      b=strdup(a);<br> \
      printf("b[ ]=\"%s\"\n",b);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> b[ ]="strdup"<br> \
      </font> </td> \
  </tr> \
',
'strlen_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strlen（返回字串長度） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> size_t strlen (const char *s);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strlen()用來計算指定的字串s的長度，不包括結束字元"\0"。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回字串s的字元數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /*取得字串str的長度*/<br> \
      #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *str = "12345678";<br> \
      printf("str length = %d\n", strlen(str));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> str length = 8<br> \
      </font> </td> \
  </tr> \
',
'strncasecmp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strncasecmp（忽略大小寫比較字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcmp，memcmp，strcmp，strcoll，strncmp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int strncasecmp(const char *s1,const  \
      char *s2,size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strncasecmp()用來比較參數s1和s2字串前n個字元，比較時會自動忽略大小寫的差異。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 若參數s1和s2 字串相同則返回0。s1 若大於s2則返回大於0的值，s1若小於s2則返回小於0  \
      的值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *a="aBcDeF";<br> \
      char *b="AbCdEf";<br> \
      if(!strncasecmp(a,b))<br> \
      printf("%s =%s\n",a,b);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> aBcDef=AbCdEf<br> \
      </font> </td> \
  </tr> \
',
'strncat_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strncat（連接兩字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy，memccpy，memecpy，strcpy，strncpy<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #inclue &lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * strncat(char *dest,const  \
      char *src,size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strncat()會將參數src字串拷貝n個字元到參數dest所指的字串尾。第一個參數dest要有足夠的空間來容納要拷貝的字串。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數dest的字串起始位址。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char a[30]="string(1)";<br> \
      char b[]="string(2)";<br> \
      printf("before strnact() :%s\n", a);<br> \
      printf("after strncat() :%s\n", strncat(a,b,6));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> before strnact() : string(1)<br> \
      after strncat() : string(1) string<br> \
      </font> </td> \
  </tr> \
',
'strncpy_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strncpy（拷貝字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bcopy，memccpy，memcpy，memmove<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * strncpy(char *dest,const  \
      char *src,size_t n);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strncpy()會將參數src字串拷貝前n個字元至參數dest所指的位址。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數dest的字串起始位址。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #inclue &lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char a[30]="string(1)";<br> \
      char b[]="string(2)";<br> \
      printf("before strncpy() : %s\n",a);<br> \
      printf("after strncpy() : %s\n",strncpy(a,b,6));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> before strncpy() : string(1)<br> \
      after strncpy() : string(1)<br> \
      </font> </td> \
  </tr> \
',
'strpbrk_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strpbrk（查找字串中第一個出現的指定字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> index，memchr，rindex，strpbrk，strsep，strspn，strstr，strtok<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;include.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char *strpbrk(const char *s,const  \
      char *accept);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strpbrk()用來找出參數s 字串中最先出現存在參數accept  \
      字串中的任意字元。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 如果找到指定的字元則返回該字元所在地址，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *s="0123456789012345678901234567890";<br> \
      char *p;<br> \
      p=strpbrk(s,"a1 839"); /*1會最先在s字串中找到*/<br> \
      printf("%s\n",p);<br> \
      p=strprk(s,"4398");/*3 會最先在s 字串中找到*/<br> \
      printf("%s\n",p);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 1.23E+29<br> \
      </font> </td> \
  </tr> \
',
'strrchr_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strrchr（查找字串中最後出現的指定字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> index，memchr，rindex，strpbrk，strsep，strspn，strstr，strtok<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * strrchr(const char *s,  \
      int c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strrchr()用來找出參數s字串中最後一個出現的參數c位址，然後將該字元出現的位址返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 如果找到指定的字元則返回該字元所在地址，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *s="0123456789012345678901234567890";<br> \
      char *p;<br> \
      p=strrchr(s,"5");<br> \
      printf("%s\n",p);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 567890<br> \
      </font> </td> \
  </tr> \
',
'strspn_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strspn（返回字串中連續不含指定字串內容的字元數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strcspn，strchr，strpbrk，strsep，strstr<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> size_t strspn (const char *s,const  \
      char * accept);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strspn()從參數s 字串的開頭計算連續的字元，而這些字元都完全是accept  \
      所指字串中的字元。簡單的說，若strspn()返回的數值為n，則代表字串s 開頭連續有n 個字元都是屬於字串accept內的字元。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回字串s開頭連續包含字串accept內的字元數目。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char *str="Linux was first developed for 386/486-based PCs.";<br> \
      char *t1="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";<br> \
      printf("%d\n",strspn(str,t1));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 5 /*計算大小寫字母。不包含“ ”，所以返回Linux的長度。*/<br> \
      </font> </td> \
  </tr> \
',
'strstr_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strstr（在一字串中查找指定的字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> index，memchr，rindex，strchr，strpbrk，strsep，strspn，strtok<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char *strstr(const char *haystack,const  \
      char *needle);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strstr()會從字串haystack 中搜尋字串needle，並將第一次出現的地址返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回指定字串第一次出現的位址，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char * s="012345678901234567890123456789";<br> \
      char *p;<br> \
      p= strstr(s,"901");<br> \
      printf("%s\n",p);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 9.01E+21<br> \
      </font> </td> \
  </tr> \
',
'strtok_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      strtok（分割字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> index，memchr，rindex，strpbrk，strsep，strspn，strstr<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * strtok(char *s,const char  \
      *delim);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> strtok()用來將字串分割成一個個片段。參數s指向欲分割的字串，參數delim則為分割字串，當strtok()在參數s的字串中發現到參數delim的分割字元時則會將該字元改為\0  \
      字元。在第一次調用時，strtok()必需給予參數s字串，往後的調用則將參數s設置成NULL。每次調用成功則返回下一個分割後的字串指標。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回下一個分割後的字串指標，如果已無從分割則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      char s[]="ab-cd : ef;gh :i-jkl;mnop;qrs-tu: vwx-y;z";<br> \
      char *delim="-: ";<br> \
      char *p;<br> \
      printf("%s ";strtok(s,delim));<br> \
      while((p=strtok(NULL,delim)))printf("%s ",p);<br> \
      printf("\n");<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ab cd ef;gh i jkl;mnop;qrs tu  \
      vwx y;z /*－與:字元已經被\0 字元取代*/<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'abs_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      abs（計算整型數的絕對值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> labs, fabs<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int abs (int j)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> abs()用來計算參數j的絕對值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數j的絕對值結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #ingclude &lt;stdlib.h&gt;<br> \
      main(){<br> \
      int ansert;<br> \
      answer = abs(-12);<br> \
      printf("|-12| = %d\n", answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> |-12| = 12<br> \
      </font> </td> \
  </tr> \
',
'acos_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      acos（取反余弦函數數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> asin , atan , atan2 , cos , sin  \
      , tan<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double acos (double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> acos()用來計算參數x的反余弦值，然後將結果返回。參數x範圍為－1至1之間，超過此範圍則會失敗。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回0至PI之間的計算結果，單位為弧度，在函式程式庫中角度均以弧度來表示。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EDOM參數x超出範圍。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入－lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;math.h&gt;<br> \
      main (){<br> \
      double angle;<br> \
      angle = acos(0.5);<br> \
      printf("angle = %f\n", angle);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> angle = 1.047198<br> \
      </font> </td> \
  </tr> \
',
'asin_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      asin（取反正弦函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> acos , atan , atan2 , cos , sin  \
      , tan<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double asin (double x)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> asin()用來計算參數x的反正弦值，然後將結果返回。參數x範圍為－1至1之間，超過此範圍則會失敗。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回－PI/2之PI/2之間的計算結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EDOM參數x超出範圍<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入－lm<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double angle;<br> \
      angle = asin (0.5);<br> \
      printf("angle = %f\n",angle);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> angle = 0.523599<br> \
      </font> </td> \
  </tr> \
',
'atan_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      atan（取反正切函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> acos，asin，atan2，cos，sin，tan<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double atan(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atan()用來計算參數x的反正切值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回-PI/2至PI/2之間的計算結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double angle;<br> \
      angle =atan(1);<br> \
      printf("angle = %f\n",angle);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> angle = 1.570796<br> \
      </font> </td> \
  </tr> \
',
'atan2_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      atan2（取得反正切函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> acos，asin，atan，cos，sin，tan<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double atan2(double y,double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atan2()用來計算參數y/x的反正切值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回-PI/2 至PI/2 之間的計算結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double angle;<br> \
      angle = atan2(1,2);<br> \
      printf("angle = %f\n", angle);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> angle = 0.463648<br> \
      </font> </td> \
  </tr> \
',
'ceil_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      ceil（取不小於參數的最小整型數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> fabs<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double ceil (double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ceil()會返回不小於參數x的最小整數值，結果以double形態返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回不小於參數x的最小整數值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double value[ ]={4.8,1.12,-2.2,0};<br> \
      int i;<br> \
      for (i=0;value[i]!=0;i++)<br> \
      printf("%f=&gt;%f\n",value[i],ceil(value[i]));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 4.800000=&gt;5.000000<br> \
      1.120000=&gt;2.000000<br> \
      -2.200000=&gt;-2.000000<br> \
      </font> </td> \
  </tr> \
',
'cos_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      cos（取余玄函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> acos，asin，atan，atan2，sin，tan<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double cos(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> cos()用來計算參數x 的余玄值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回-1至1之間的計算結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer = cos(0.5);<br> \
      printf("cos (0.5) = %f\n",answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> cos(0.5) = 0.877583<br> \
      </font> </td> \
  </tr> \
',
'cosh_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      cosh（取雙曲線余玄函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sinh，tanh<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double cosh(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> cosh()用來計算參數x的雙曲線余玄值，然後將結果返回。數學定義式為:(exp(x)+exp(-x))/2。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數x的雙曲線余玄值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer = cosh(0.5);<br> \
      printf("cosh(0.5) = %f\n",answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> cosh(0.5) = 1.127626<br> \
      </font> </td> \
  </tr> \
',
'exp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      exp（計算指數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> log，log10，pow<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double exp(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> exp()用來計算以e為底的x次方值，即ex值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回e的x次方計算結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer;<br> \
      answer = exp (10);<br> \
      printf("e^10 =%f\n", answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> e^10 = 22026.465795<br> \
      </font> </td> \
  </tr> \
',
'frexp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      frexp（將浮點型數分為底數與指數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ldexp，modf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double frexp( double x, int *exp);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> frexp()用來將參數x 的浮點型數切割成底數和指數。底數部分直接返回，指數部分則借參數exp  \
      指針返回，將返回值乘以2 的exp次方即為x的值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數x的底數部分，指數部分則存於exp指標所指的位址。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      int exp;<br> \
      double fraction;<br> \
      fraction = frexp (1024,&exp);<br> \
      printf("exp = %d\n",exp);<br> \
      printf("fraction = %f\n", fraction);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> exp = 11<br> \
      fraction = 0.500000 /* 0.5*(2^11)=1024*/<br> \
      </font> </td> \
  </tr> \
',
'ldexp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      ldexp（計算2的次方值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> frexp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double ldexp(double x,int exp);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ldexp()用來將參數x乘上2的exp次方值，即x*2exp。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回計算結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例: </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 計算3*(2^2)＝12 */<br> \
      #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      int exp;<br> \
      double x,answer;<br> \
      answer = ldexp(3,2);<br> \
      printf("3*2^(2) = %f\n",answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 3*2^(2) = 12.000000<br> \
      </font> </td> \
  </tr> \
',
'log_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      log（計算以e 為底的對數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> exp，log10，pow<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double log (double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> log（）用來計算以e為底的x 對數值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數x的自然對數值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EDOM 參數x為負數，ERANGE 參數x為零值，零的對數值無定義。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer;<br> \
      answer = log (100);<br> \
      printf("log(100) = %f\n",answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> log(100) = 4.605170<br> \
      </font> </td> \
  </tr> \
',
'log10_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      log10（計算以10 為底的對數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> exp，log，pow<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double log10(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> log10()用來計算以10為底的x對數值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數x以10為底的對數值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EDOM參數x為負數。RANGE參數x為零值，零的對數值無定義。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer;<br> \
      answer = log10(100);<br> \
      printf("log10(100) = %f\n",answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> log10(100) = 2.000000<br> \
      </font> </td> \
  </tr> \
',
'pow_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      pow（計算次方值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> exp，log，log10<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double pow(double x,double y);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> pow()用來計算以x為底的y次方值，即xy值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回x的y次方計算結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EDOM 參數x為負數且參數y不是整數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer;<br> \
      answer =pow(2,10);<br> \
      printf("2^10 = %f\n", answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 2^10 = 1024.000000<br> \
      </font> </td> \
  </tr> \
',
'sin_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      sin（取正玄函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> acos，asin，atan，atan2，cos，tan<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double sin(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sin（）用來計算參數x的正玄值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回-1 至1之間的計算結果。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer = sin (0.5);<br> \
      printf("sin(0.5) = %f\n",answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sin(0.5) = 0.479426<br> \
      </font> </td> \
  </tr> \
',
'sinh_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      sinh（取雙曲線正玄函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> cosh，tanh<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double sinh( double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sinh()用來計算參數x的雙曲線正玄值，然後將結果返回。數學定義式為:(exp(x)-exp(-x))/2。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數x的雙曲線正玄值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
	  main()<br> \
	  {<br> \
	  double answer = sinh (0.5);<br> \
	  printf("sinh(0.5) = %f\n",answer);<br> \
	  }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sinh(0.5) = 0.521095<br> \
      </font> </td> \
  </tr> \
',
'sqrt_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      sqrt（計算平方根值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> hypotq<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double sqrt(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sqrt()用來計算參數x的平方根，然後將結果返回。參數x必須為正數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數x的平方根值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EDOM 參數x為負數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 計算200的平方根值*/<br> \
      #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double root;<br> \
      root = sqrt (200);<br> \
      printf("answer is %f\n",root);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> answer is 14.142136<br> \
      </font> </td> \
  </tr> \
',
'tan_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      tan（取正切函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> atan，atan2，cos，sin<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double tan(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> tan()用來計算參數x的正切值，然後將結果返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數x的正切值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer = tan(0.5);<br> \
      printf("tan (0.5) = %f\n",answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> tan(0.5) = 0.546302<br> \
      </font> </td> \
  </tr> \
',
'tanh_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      tanh（取雙曲線正切函數值） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> cosh，sinh<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> double tanh(double x);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> tanh()用來計算參數x的雙曲線正切值，然後將結果返回。數學定義式為:sinh(x)/cosh(x)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回參數x的雙曲線正切值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 使用GCC編譯時請加入-lm。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;math.h&gt;<br> \
      main()<br> \
      {<br> \
      double answer = tanh(0.5);<br> \
      printf("tanh(0.5) = %f\n",answer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> tanh(0.5) = 0.462117<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'endgrent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        endgrent（關閉組文件） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgrent，setgrent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> void endgrent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> endgrent()用來關閉由getgrent()所打開的密碼檔。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 請參考getgrent()與setgrent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'endpwent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        endpwent（關閉密碼檔） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpwent，setpwent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> void endpwent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> endpwent()用來關閉由getpwent()所打開的密碼檔。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 請參考getpwent()與setpwent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'endutent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        endutent（關閉utmp 文件） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent，setutent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> void endutent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> endutent()用來關閉由getutent所打開的utmp文件。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 請參考getutent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'fgetgrent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        fgetgrent（從指定的檔來讀取組格式） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> fgetpwent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        #include&lt;stdio.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> struct group * getgrent(FILE  \
        * stream);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> fgetgrent()會從參數stream指定的檔讀取一行資料，然後以group結構將該資料返回。參數stream所指定的檔必須和、etc/group相同的格式。group結構定義請參考getgrent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回group結構資料，如果返回NULL則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include &lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        #include&lt;stdio.h&gt;<br> \
        main()<br> \
        {<br> \
        struct group *data;<br> \
        FILE *stream;<br> \
        int i;<br> \
        stream = fopen("/etc/group", "r");<br> \
        while((data = fgetgrent(stream))!=0){<br> \
        i=0;<br> \
        printf("%s :%s:%d :", data-&gt;gr_name,data-&gt;gr_passwd,data-&gt;gr_gid);<br> \
        while (data-&gt;gr_mem[i])printf("%s,",data-&gt;gr_mem[i++]);<br> \
        printf("\n");<br> \
        }<br> \
        fclose(stream);<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> root:x:0:root,<br> \
        bin:x:1:root,bin,daemon<br> \
        daemon:x:2:root,bin,daemon<br> \
        sys:x:3:root,bin,adm<br> \
        adm:x:4:root,adm,daemon<br> \
        tty:x:5<br> \
        disk:x:6:root<br> \
        lp:x:7:daemon,lp<br> \
        mem:x:8<br> \
        kmem:x:9<br> \
        wheel:x:10:root<br> \
        mail:x:12:mail<br> \
        news:x:13:news<br> \
        uucp:x:14:uucp<br> \
        man:x:15<br> \
        games:x:20<br> \
        gopher:x:30<br> \
        dip:x:40:<br> \
        ftp:x:50<br> \
        nobody:x:99:<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'fgetpwent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        fgetpwent（從指定的檔來讀取密碼格式） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> fgetgrent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;stdio.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> struct passwd * fgetpwent(FILE  \
        *stream);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> fgetpwent()會從參數stream指定的檔讀取一行資料，然後以passwd結構將該資料返回。參數stream所指定的檔必須和/etc/passwd相同的格式。passwd結構定義請參考getpwent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回passwd結構資料，如果返回NULL則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        struct passwd *user;<br> \
        FILE *stream;<br> \
        stream = fopen("/etc/passwd", "r");<br> \
        while((user = fgetpwent(stream))!=0){<br> \
        printf("%s:%d:%d:%s:%s:%s\n",user-&gt;pw_name,user-&gt;pw_uid,user-&gt;pw_gid,user-&gt;pw_gecos,user-&gt;pw_dir,user-&gt;pw_shell);<br> \
        }<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> root:0:0:root:/root:/bin/bash<br> \
        bin:1:1:bin:/bin:<br> \
        daemon:2:2:daemon:/sbin:<br> \
        adm:3:4:adm:/var/adm:<br> \
        lp:4:7:lp:/var/spool/lpd:<br> \
        sync:5:0:sync:/sbin:/bin/sync<br> \
        shutdown:6:0:shutdown:/sbin:/sbin/shutdown<br> \
        halt:7:0:halt:/sbin:/sbin/halt<br> \
        mail:8:12:mail:/var/spool/mail:<br> \
        news:9:13:news:var/spool/news<br> \
        uucp:10:14:uucp:/var/spool/uucp:<br> \
        operator:11:0:operator :/root:<br> \
        games:12:100:games:/usr/games:<br> \
        gopher:13:30:gopher:/usr/lib/gopher-data:<br> \
        ftp:14:50:FTP User:/home/ftp:<br> \
        nobody:99:99:Nobody:/:<br> \
        xfs:100:101:X Font Server: /etc/Xll/fs:/bin/false<br> \
        gdm:42:42:/home/gdm:/bin/bash<br> \
        kids:500:500: : /home/kids:/bin/bash<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getegid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getegid（取得有效的組識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgid，setgid，setregid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> gid_t getegid(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getegid()用來取得執行目前進程有效組識別碼。有效的組識別碼用來決定進程執行時組的許可權。返回值返回有效的組識別碼。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> main()<br> \
        { <br> \
        printf("egid is %d\n",getegid());<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> egid is 0 /*當使用root身份執行範例程式時*/<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'geteuid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        geteuid（取得有效的用戶識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getuid，setreuid，setuid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> uid_t geteuid(void)<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> geteuid()用來取得執行目前進程有效的使用者識別碼。有效的使用者識別碼用來決定進程執行的許可權，借由此改變此值，進程可以獲得額外的許可權。倘若執行檔的setID位已被設置，該檔執行時，其進程的euid值便會設成該文件所有者的uid。例如，執行檔/usr/bin/passwd的許可權為-r-s--x--x，其s  \
        位即為setID(SUID)位，而當任何用戶在執行passwd 時其有效的用戶識別碼會被設成passwd 所有者的uid 值，即root的uid  \
        值(0)。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回有效的用戶識別碼。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> main()<br> \
        { <br> \
        printf ("euid is %d \n",geteuid());<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> euid is 0 /*當使用root身份執行範例程式時*/<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getgid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getgid（取得真實的組識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getegid，setregid，setgid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> gid_t getgid(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgid()用來取得執行目前進程的組識別碼。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回組識別碼<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> main()<br> \
        {<br> \
        printf(“gid is %d\n”,getgid());<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> gid is 0 /*當使用root身份執行範例程式時*/<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getgrent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getgrent（從組檔中取得帳號的資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setgrent，endgrent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        #include &lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> struct group *getgrent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgrent()用來從組檔(/etc/group)中讀取一項組資料，該資料以group  \
        結構返回。第一次調用時會取得第一項組資料，之後每調用一次就會返回下一項資料，直到已無任何資料時返回NULL。<br> \
        struct group{<br> \
        char *gr_name; /*組名稱*/<br> \
        char *gr_passwd; /* 組密碼*/<br> \
        gid_t gr_gid; /*組識別碼*/<br> \
        char **gr_mem; /*組成員帳號*/<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回group結構資料，如果返回NULL則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgrent()在第一次調用時會打開組檔，讀取資料完畢後可使用endgrent()來關閉該組檔。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> ENOMEM 記憶體不足，無法配置group結構。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        struct group *data;<br> \
        int i;<br> \
        while((data= getgrent())!=0){<br> \
        i=0;<br> \
        printf(“%s:%s:%d:”,data-&gt;gr_name,data-&gt;gr_passwd,data-&gt;gr_gid);<br> \
        while(data-&gt;gr_mem[i])printf(“%s,”,data-&gt;gr_mem[i++]);<br> \
        printf(“\n”);<br> \
        }<br> \
        endgrent();<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> root:x:0:root,<br> \
        bin:x:1:root,bin,daemon,<br> \
        daemon:x:2:root,bin,daemon,<br> \
        sys:x:3:root,bin,adm,<br> \
        adm:x:4:root,adm,daemon<br> \
        tty:x:5<br> \
        disk:x:6:root<br> \
        lp:x:7:daemon,lp<br> \
        mem:x:8<br> \
        kmem:x:9:<br> \
        wheel:x:10:root<br> \
        mail:x:12:mail<br> \
        news:x:13:news<br> \
        uucp:x:14:uucp<br> \
        man:x:15:<br> \
        games:x:20<br> \
        gopher:x:30<br> \
        dip:x:40<br> \
        ftp:x:50<br> \
        nobody:x:99<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getgrgid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getgrgid（從組檔中取得指定gid 的資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> fgetgrent，getgrent，getgrnam<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> strcut group * getgrgid(gid_t  \
        gid);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgrgid（）用來依參數gid指定的組識別碼逐一搜索組檔，找到時便將該組的資料以group結構返回。group結構請參考getgrent（）。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回group結構資料，如果返回NULL則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> /* 取得gid＝3的組資料*/<br> \
        #include&lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        strcut group *data;<br> \
        int i=0;<br> \
        data = getgrgid(3);<br> \
        printf(“%s:%s:%d:”,data-&gt;gr_name,data-&gt;gr_passwd,data-&gt;gr_gid);<br> \
        while(data-&gt;gr_mem[i])printf(“%s ,”,data-&gt;mem[i++]);<br> \
        printf(“\n”);<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> sys:x:3:root,bin,adm<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getgrnam_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getgrnam（從組檔中取得指定組的資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> fgetgrent，getrent，getgruid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> strcut group * getgrnam(const  \
        char * name);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgrnam（）用來逐一搜索參數那麼指定的組名稱，找到時便將該組的資料以group結構返回。group  \
        結構請參考getgrent（）。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回group結構資料，如果返回NULL則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> /* 取得adm的組資料*/<br> \
        #include&lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        strcut group * data;<br> \
        int i=0;<br> \
        data = getgrnam(“adm”);<br> \
        printf(“%s:%s:%d:”,data-&gt;gr_name,data-&gt;gr_passwd,data-&gt;gr_gid);<br> \
        while(data-&gt;gr_mem[i])printf(“%s,”,data-&gt;gr_mem[i++]);<br> \
        printf(“\n”);<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> adm:x:4:root,adm,daemon<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getgroups_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getgroups（取得組代碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> initgroups，setgroup，getgid，setgid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int getgroups(int size,gid_t  \
        list[]);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgroup（）用來取得目前用戶所屬的組代碼。參數size為list〔〕所能容納的gid_t  \
        數目。如果參數size 值為零，此函數僅會返回使用者所屬的組數。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回組識別碼，如有錯誤則返回-1。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> EFAULT 參數list陣列位址不合法。EINVAL  \
        參數size值不足以容納所有的組。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        gid_t list[500];<br> \
        int x,i;<br> \
        x = getgroups(0.list);<br> \
        getgroups(x,list);<br> \
        for(i=0;i&lt;x;i++)<br> \
        printf(“%d:%d\n”,i,list[i]);<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 0:00<br> \
        1:01<br> \
        2:02<br> \
        3:03<br> \
        4:04<br> \
        5:06<br> \
        6:10<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getpw_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getpw（取得指定使用者的密碼檔資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpwent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int getpw(uid_t uid,char *buf);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpw()會從/etc/passwd中查找符合參數uid所指定的使用者帳號資料，找不到相關資料就返回-1。所返回的buf字串格式如下:帳號:密碼:用戶識別碼(uid):組識別碼(gid):全名:根目錄:shell<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回0表示成功，有錯誤發生時返回-1。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 1. getpw()會有潛在的安全性問題，請儘量使用別的函數取代。<br> \
        2. 使用shadow的系統已把使用者密碼抽出/etc/passwd，因此使用getpw()取得的密碼將為“x”。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        char buffer[80];<br> \
        getpw(0,buffer);<br> \
        printf(“%s\n”,buffer);<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> root:x:0:0:root:/root:/bin/bash<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getpwent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getpwent（從密碼檔中取得帳號的資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpw，fgetpwent，getpwnam，getpwuid，setpwent，endpwent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> strcut passwd * getpwent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpwent（）用來從密碼檔（/etc/passwd）中讀取一項使用者資料，該使用者的資料以passwd  \
        結構返回。第一次調用時會取得第一位使用者資料，之後每調用一次就會返回下一項資料，直到已無任何資料時返回NULL。<br> \
        passwd 結構定義如下<br> \
        struct passwd{<br> \
        char * pw_name; /*用戶帳號*/<br> \
        char * pw_passwd; /*使用者密碼*/<br> \
        uid_t pw_uid; /*用戶識別碼*/<br> \
        gid_t pw_gid; /*組識別碼*/<br> \
        char * pw_gecos; /*用戶全名*/<br> \
        char * pw_dir; /*家目錄*/<br> \
        char * pw_shell; /* 所使用的shell路徑*/<br> \
        };<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回passwd 結構資料，如果返回NULL 則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpwent()在第一次調用時會打開密碼檔，讀取資料完畢後可使用endpwent()來關閉該密碼檔。錯誤代碼ENOMEM  \
        記憶體不足，無法配置passwd結構。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        struct passwd *user;<br> \
        while((user = getpwent())!=0){<br> \
        printf(“%s:%d:%d:%s:%s:%s\n”,user-&gt;pw_name,user-&gt;pw_uid,user-&gt;pw_gid,<br> \
        user-&gt;pw_gecos,user-&gt;pw_dir,user-&gt;pw_shell);<br> \
        }<br> \
        endpwent();<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> root:0:0:root:/root:/bin/bash<br> \
        bin:1:1:bin:/bin:<br> \
        daemon:2:2:daemon:/sbin:<br> \
        adm:3:4:adm:/var/adm:<br> \
        lp:4:7:lp:/var/spool/lpd:<br> \
        sync:5:0:sync:/sbin:/bin/sync<br> \
        shutdown:6:0:shutdown:/sbin:/sbin/shutdown<br> \
        halt:7:0:halt:/sbin:/sbin/halt<br> \
        mail:8:12:mail:/var/spool/mail:<br> \
        news:9:13:news:var/spool/news<br> \
        uucp:10:14:uucp:/var/spool/uucp:<br> \
        operator:11:0:operator :/root:<br> \
        games:12:100:games:/usr/games:<br> \
        gopher:13:30:gopher:/usr/lib/gopher-data:<br> \
        ftp:14:50:FTP User:/home/ftp:<br> \
        nobody:99:99:Nobody:/:<br> \
        xfs:100:101:X Font Server: /etc/Xll/fs:/bin/false<br> \
        gdm:42:42:/home/gdm:/bin/bash<br> \
        kids:500:500: : /home/kids:/bin/bash<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getpwnam_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getpwnam（從密碼檔中取得指定帳號的資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpw，fgetpwent，getpwent，getpwuid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> struct passwd * getpwnam(const  \
        char * name);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpwnam()用來逐一搜索參數name 指定的帳號名稱，找到時便將該使用者的資料以passwd結構返回。passwd結構請參考getpwent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回passwd 結構資料，如果返回NULL 則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> /*取得root帳號的識別碼和根目錄*/<br> \
        #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        struct passwd *user;<br> \
        user = getpwnam(“root”);<br> \
        printf(“name:%s\n”,user-&gt;pw_name);<br> \
        printf(“uid:%d\n”,user-&gt;pw_uid);<br> \
        printf(“home:%s\n”,user-&gt;pw_dir);<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> name:root<br> \
        uid:0<br> \
        home:/root<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getpwuid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getpwuid（從密碼檔中取得指定uid 的資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpw，fgetpwent，getpwent，getpwnam<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> struct passwd * getpwuid(uid_t  \
        uid);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpwuid()用來逐一搜索參數uid 指定的用戶識別碼，找到時便將該使用者的資料以結構返回結構請參考將該使用者的資料以passwd  \
        結構返回。passwd 結構請參考getpwent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回passwd 結構資料，如果返回NULL 則表示已無數據，或者有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        struct passwd *user;<br> \
        user= getpwuid(6);<br> \
        printf(“name:%s\n”,user-&gt;pw_name);<br> \
        printf(“uid:%d\n”,user-&gt;pw_uid);<br> \
        printf(“home:%s\n”,user-&gt;pw_dir);<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> name:shutdown<br> \
        uid:6<br> \
        home:/sbin<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getuid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getuid（取得真實的用戶識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> geteuid，setreuid，setuid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> uid_t getuid(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getuid()用來取得執行目前進程的使用者識別碼。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 用戶識別碼<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> main()<br> \
        { <br> \
        printf(“uid is %d\n”,getuid());<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> uid is 0 /*當使用root身份執行範例程式時*/<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getutent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getutent（從utmp 檔中取得帳號登錄資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent，getutid，getutline，setutent，endutent，pututline，utmpname<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> struct utmp *getutent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent()用來從utmp 檔(/var/run/utmp)中讀取一項登錄資料，該資料以utmp  \
        結構返回。第一次調用時會取得第一位使用者資料，之後每調用一次就會返回下一項資料，直到已無任何資料時返回NULL。<br> \
        utmp結構定義如下<br> \
        struct utmp<br> \
        {<br> \
        short int ut_type; /*登錄類型*/<br> \
        pid_t ut_pid; /*login進程的pid*/<br> \
        char ut_line[UT_LINESIZE];/*登錄裝置名，省略了“/dev/”*/<br> \
        char ut_id[4]; /* Inittab ID*/<br> \
        char ut_user[UT_NAMESIZE];/*登錄帳號*/<br> \
        char ut_host[UT_HOSTSIZE];/*登錄帳號的遠端主機名稱稱*/<br> \
        struxt exit_status ut_exit;/* 當類型為DEAD_PROCESS時進程的結<br> \
        束狀態*/<br> \
        long int ut_session; /*Sessioc ID*/<br> \
        struct timeval ut_tv; /*時間記錄*/<br> \
        int32_t ut_addr_v6[4]; /*遠端主機的網路位址*/<br> \
        char __unused[20]; /* 保留未使用*/<br> \
        };<br> \
        ut_type有以下幾種類型:<br> \
        EMPTY 此為空的記錄。<br> \
        RUN_LVL 記錄系統run－level的改變<br> \
        BOOT_TIME 記錄系統開機時間<br> \
        NEW_TIME 記錄系統時間改變後的時間<br> \
        OLD_TINE 記錄當改變系統時間時的時間。<br> \
        INIT_PROCESS 記錄一個由init衍生出來的進程。<br> \
        LOGIN_PROCESS 記錄login進程。<br> \
        USER_PROCESS 記錄一般進程。<br> \
        DEAD_PROCESS 記錄一結束的進程。<br> \
        ACCOUNTING 目前尚未使用。<br> \
        exit_status結構定義<br> \
        struct exit_status<br> \
        {<br> \
        short int e_termination; /*進程結束狀態*/<br> \
        short int e_exit; /*進程退出狀態*/<br> \
        };<br> \
        timeval的結構定義請參考gettimeofday（）。<br> \
        相關常數定義如下:<br> \
        UT_LINESIZE 32<br> \
        UT_NAMESIZE 32<br> \
        UT_HOSTSIZE 256<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回utmp 結構資料，如果返回NULL 則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent()在第一次調用時會打開utmp 檔，讀取資料完畢後可使用endutent()來關閉該utmp檔。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        main()<br> \
        {<br> \
        struct utmp *u;<br> \
        while((u=getutent())){<br> \
        if(u-&gt;ut_type = = USER_PROCESS)<br> \
        printf(“%d %s %s %s \n”,u-&gt;ut_type,u-&gt;ut_user,u-&gt;ut_line,u-&gt;ut_host);<br> \
        }<br> \
        endutent();<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> /* 表示有三個root帳號分別登錄/dev/pts/0，/dev/pts/1，/dev/pts/2  \
        */<br> \
        7 root pts/0<br> \
        7 root pts/1<br> \
        7 root pts/2<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getutid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getutid（從utmp 檔中查找特定的記錄） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent，getutline<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> strcut utmp *getutid(strcut  \
        utmp *ut);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutid()用來從目前utmp 檔的讀寫位置逐一往後搜索參數ut指定的記錄，如果ut-&gt;ut_type  \
        為RUN_LVL，BOOT_TIME，NEW_TIME，OLD_TIME 其中之一則查找與ut-&gt;ut_type 相符的記錄；若ut-&gt;ut_type  \
        為INIT_PROCESS，LOGIN_PROCESS，USER_PROCESS或DEAD_PROCESS其中之一，則查找與ut-&gt;ut_id相符的記錄。找到相符的記錄便將該資料以utmp  \
        結構返回。utmp結構請參考getutent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回utmp 結構資料，如果返回NULL 則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        main()<br> \
        {<br> \
        struct utmp ut,*u;<br> \
        ut.ut_type=RUN_LVL;<br> \
        while((u= getutid(&ut))){<br> \
        printf(“%d %s %s %s\n”,u-&gt;ut_type,u-&gt;ut_user,u-&gt;ut_line,u-&gt;ut_host);<br> \
        }<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 1 runlevel -<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'getutline_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        getutline（從utmp 檔中查找特定的記錄） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent，getutid，pututline<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> struct utmp * getutline (struct  \
        utmp *ut);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutline()用來從目前utmp檔的讀寫位置逐一往後搜索ut_type為USER_PROCESS  \
        或LOGIN_PROCESS 的記錄，而且ut_line 和ut-&gt;ut_line 相符。找到相符的記錄便將該資料以utmp 結構返回，utmp結構請參考getutent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 返回utmp 結構資料，如果返回NULL 則表示已無數據，或有錯誤發生。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        main()<br> \
        {<br> \
        struct utmp ut,*u;<br> \
        strcpy (ut.ut_line,”pts/1”);<br> \
        while ((u=getutline(&ut))){<br> \
        printf(“%d %s %s %s \n”,u-&gt;ut_type,u-&gt;ut_user,u-&gt;ut_line,u-&gt;ut_host);<br> \
        }<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 7 root pts/1<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'initgroups_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        initgroups（初始化組清單） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setgrent，endgrent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int initgroups(const char *user,gid_t  \
        group);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> initgroups（）用來從組檔（/etc/group）中讀取一項組資料，若該組資料的成員中有參數user時，便將參數group組識別碼加入到此資料中。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗則返回-1，錯誤碼存於errno。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'pututline_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        pututline（將utmp 記錄寫入檔） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent，getutid，getutline<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> void pututline(struct utmp *ut);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> pututline()用來將參數ut的utmp結構記錄到utmp檔中。此函數會先用getutid()來取得正確的寫入位置，如果沒有找到相符的記錄則會加入到utmp檔案結尾，utmp結構請參考getutent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 需要有寫入/var/run/utmp 的許可權<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        main()<br> \
        {<br> \
        struct utmp ut;<br> \
        ut.ut_type =USER_PROCESS;<br> \
        ut.ut_pid=getpid();<br> \
        strcpy(ut.ut_user,”kids”);<br> \
        strcpy(ut.ut_line,”pts/1”);<br> \
        strcpy(ut.ut_host,”www.gnu.org”);<br> \
        pututline(&ut);<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> /*執行範例後用指令who -l 觀察*/<br> \
        root pts/0 dec9 19:20<br> \
        kids pts/1 dec12 10:31(www.gnu.org)<br> \
        root pts/2 dec12 13:33<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'seteuid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        seteuid（設置有效的用戶識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setuid，setreuid，setfsuid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int seteuid(uid_t euid);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> seteuid()用來重新設置執行目前進程的有效使用者識別碼。在Linux下，seteuid(euid)相當於setreuid(-1,euid)。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗則返回-1，錯誤代碼存於errno<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 請參考setuid<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setfsgid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setfsgid（設置檔案系統的組識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setuid，setreuid，seteuid，setfsuid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int setfsgid(uid_t fsgid);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setfsgid()用來重新設置目前進程的檔案系統的組識別碼。一般情況下，檔案系統的組識別碼(fsgid)與有效的組識別碼(egid)是相同的。如果是超級使用者調用此函數，參數fsgid  \
        可以為任何值，否則參數fsgid必須為real/effective/saved的組識別碼之一。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗則返回-1，錯誤代碼存於errno。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 此函數為Linux特有。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> EPERM 許可權不夠，無法完成設置。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setfsuid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setfsuid（設置檔案系統的用戶識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setuid，setreuid，seteuid，setfsgid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int setfsuid(uid_t fsuid);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setfsuid()用來重新設置目前進程的檔案系統的使用者識別碼。一般情況下，檔案系統的使用者識別碼(fsuid)與有效的用戶識別碼(euid)是相同的。如果是超級使用者調用此函數，參數fsuid可以為任何值，否則參數fsuid必須為real/effective/saved的用戶識別碼之一。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗則返回-1，錯誤代碼存於errno<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 此函數為Linux特有<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> EPERM 許可權不夠，無法完成設置。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setgid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setgid（設置真實的組識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgid，setregid，getegid，setegid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int setgid(gid_t gid);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setgid()用來將目前進程的真實組識別碼(real  \
        gid)設成參數gid值。如果是以超級用戶身份執行此調用，則real、effective與savedgid都會設成參數gid。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 設置成功則返回0，失敗則返回-1，錯誤代碼存於errno中。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> EPERM 並非以超級用戶身份調用，而且參數gid 並非進程的effective  \
        gid或saved gid值之一。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setgrent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setgrent（從頭讀取組檔中的組資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getgrent，endgrent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> void setgrent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setgrent()用來將getgrent()的讀寫地址指回組文件開頭。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 請參考setpwent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setgroups_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setgroups（設置組代碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> initgroups，getgroup，getgid，setgid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;grp.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int setgroups(size_t size,const  \
        gid_t * list);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setgroups()用來將list 陣列中所標明的組加入到目前進程的組設置中。參數size為list()的gid_t數目，最大值為NGROUP(32)。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 設置成功則返回0，如有錯誤則返回-1。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> EFAULT 參數list陣列位址不合法。<br> \
        EPERM 許可權不足，必須是root許可權<br> \
        EINVAL 參數size值大於NGROUP(32)。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setpwent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setpwent（從頭讀取密碼檔中的帳號資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getpwent，endpwent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> void setpwent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setpwent()用來將getpwent()的讀寫位址指回密碼檔開頭。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;pwd.h&gt;<br> \
        #include&lt;sys/types.h&gt;<br> \
        main()<br> \
        {<br> \
        struct passwd *user;<br> \
        int i;<br> \
        for(i=0;i&lt;4;i++){<br> \
        user=getpwent();<br> \
        printf(“%s :%d :%d :%s:%s:%s\n”,user-&gt;pw_name,user-&gt;pw_uid,user-&gt;pw_gid,<br> \
        user-&gt;pw_gecos,user-&gt;pw_dir,user-&gt;pw_shell);<br> \
        }<br> \
        setpwent();<br> \
        user=getpwent();<br> \
        printf(“%s :%d :%d :%s:%s:%s\n”,user-&gt;pw_name,user-&gt;pw_uid,user-&gt;pw_gid,<br> \
        user-&gt;pw_gecos,user-&gt;pw_dir,user-&gt;pw_shell);<br> \
        endpwent();<br> \
        }<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> root:0:0:root:/root:/bin/bash<br> \
        bin:1:1:bin:/bin<br> \
        daemon:2:2:daemon:/sbin<br> \
        adm:3:4:adm:/var/adm<br> \
        root:0:0:root:/root:/bin/bash<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setregid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setregid（設置真實及有效的組識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setgid，setegid，setfsgid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int setregid(gid_t rgid,gid_t  \
        egid);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setregid()用來將參數rgid設為目前進程的真實組識別碼，將參數egid設置為目前進程的有效組識別碼。如果參數rgid或egid值為-1，則對應的識別碼不會改變。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗則返回-1，錯誤代碼存於errno。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setreuid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setreuid（設置真實及有效的用戶識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setuid，seteuid，setfsuid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int setreuid(uid_t ruid,uid_t  \
        euid);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setreuid()用來將參數ruid 設為目前進程的真實使用者識別碼，將參數euid  \
        設置為目前進程的有效使用者識別碼。如果參數ruid 或euid值為-1，則對應的識別碼不會改變。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗則返回-1，錯誤代碼存於errno。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 請參考setuid（）。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setuid_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setuid（設置真實的用戶識別碼） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getuid，setreuid，seteuid，setfsuid<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> int setuid(uid_t uid)<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setuid()用來重新設置執行目前進程的使用者識別碼。不過，要讓此函數有作用，其有效的用戶識別碼必須為0(root)。在Linux下，當root使用setuid()來變換成其他用戶識別碼時，root許可權會被拋棄，完全轉換成該用戶身份，也就是說，該進程往後將不再具有可setuid()的權利，如果只是向暫時拋棄root  \
        許可權，稍後想重新取回許可權，則必須使用seteuid()。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗則返回-1，錯誤代碼存於errno。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 一般在編寫具setuid root的程式時，為減少此類程式帶來的系統安全風險，在使用完root許可權後建議馬上執行setuid(getuid());來拋棄root許可權。此外，進程uid和euid不一致時Linux系統將不會產生core  \
        dump。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'setutent_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        setutent（從頭讀取utmp 檔中的登錄資料） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent，endutent<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> void setutent(void);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> setutent()用來將getutent()的讀寫地址指回utmp文件開頭。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> 請參考setpwent()或setgrent()。<br> \
        </font> </div> \
    </td> \
  </tr> \
',
'utmpname_html': ' \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        utmpname（設置utmp 檔路徑） </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> getutent，getutid，getutline，setutent，endutent，pututline<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> #include&lt;utmp.h&gt;<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> void utmpname(const char * file);<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> utmpname()用來設置utmp檔的路徑，以提供utmp相關函數的存取路徑。如果沒有使用utmpname()則預設utmp檔路徑為/var/run/utmp。<br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td>  \
      <div align="left"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
  </tr> \
  <tr>  \
    <td valign="top" width="80">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'crypt_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      crypt（將密碼或資料編碼） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getpass<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #define _XOPEN_SOURCE<br> \
      #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> char * crypt (const char *key,const char *  \
      salt);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> crypt()將使用Data Encryption Standard(DES)演算法將參數key所指的字串加以編碼，key字串長度僅取前8個字元，超過此長度的字元沒有意義。參數salt為兩個字元組成的字串，由a-z、A-Z、0-9，“.”和“/”所組成，用來決定使用4096  \
      種不同內建表格的哪一個。函數執行成功後會返回指向編碼過的字串指標，參數key 所指的字串不會有所更動。編碼過的字串長度為13 個字元，前兩個字元為參數salt代表的字串。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回一個指向以NULL結尾的密碼字串。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 使用GCC編譯時需加-lcrypt。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      char passwd[13];<br> \
      char *key;<br> \
      char slat[2];<br> \
      key= getpass(“Input First Password:”);<br> \
      slat[0]=key[0];<br> \
      slat[1]=key[1];<br> \
      strcpy(passwd,crypt(key slat));<br> \
      key=getpass(“Input Second Password:”);<br> \
      slat[0]=passwd[0];<br> \
      slat[1]=passwd[1];<br> \
      printf(“After crypt(),1st passwd :%s\n”,passwd);<br> \
      printf(“After crypt(),2nd passwd:%s \n”,crypt(key slat));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> Input First Password: /* 輸入test，編碼後存於passwd[  \
      ] */<br> \
      Input Second Password /*輸入test，密碼相同編碼後也會相同*/<br> \
      After crypt () 1st Passwd : teH0wLIpW0gyQ<br> \
      After crypt () 2nd Passwd : teH0wLIpW0gyQ<br> \
      </font> </td> \
  </tr> \
',
'bsearch_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      bsearch（二元搜索） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> qsort<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void *bsearch(const void *key,const void *base,size_t  \
      nmemb,size_tsize,int (*compar) (const void*,const void*));<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> bsearch()利用二元搜索從排序好的陣列中查找資料。參數key指向欲查找的關鍵資料，參數base指向要被搜索的陣列開頭位址，參數nmemb  \
      代表陣列中的元素數量，每一元素的大小則由參數size決定，最後一項參數compar 為一函數指標，這個函數用來判斷兩個元素之間的大小關係，若傳給compar  \
      的第一個參數所指的元素資料大於第二個參數所指的元素資料則必須回傳大於0 的值，兩個元素資料相等則回傳0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 找到關鍵資料則返回找到的位址，如果在陣列中找不到關鍵資料則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #include&lt;stdlib.h&gt;<br> \
      #define NMEMB 5<br> \
      #define SIZE 10<br> \
      int compar(const void *a,const void *b)<br> \
      {<br> \
      return (strcmp((char *)a,(char *)b));<br> \
      }<br> \
      main()<br> \
      {<br> \
      char data[50][size]={“linux”,”freebsd”,”solaris”,”sunos”,”windows”};<br> \
      char key[80],*base ,*offset;<br> \
      int i, nmemb=NMEMB,size=SIZE;<br> \
      while(1){<br> \
      printf(“&gt;”);<br> \
      fgets(key,sizeof(key),stdin);<br> \
      key[strlen(key)-1]=’\0’;<br> \
      if(!strcmp(key,”exit”))break;<br> \
      if(!strcmp(key,”list”)){<br> \
      for(i=0;i&lt;nmemb;i++)<br> \
      printf(“%s\n”,data[i]);<br> \
      continue;<br> \
      }<br> \
      base = data[0];<br> \
      qsort(base,nmemb,size,compar);<br> \
      offset = (char *) bsearch(key,base,nmemb,size,compar);<br> \
      if( offset = =NULL){<br> \
      printf(“%s not found!\n”,key);<br> \
      strcpy(data[nmemb++],key);<br> \
      printf(“Add %s to data array\n”,key);<br> \
      }else{<br> \
      printf(“found: %s \n”,offset);<br> \
      }<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> &gt;hello /*輸入hello字串*/<br> \
      hello not found! /*找不到hello 字串*/<br> \
      add hello to data array /*將hello字串加入*/<br> \
      &gt;.list /*列出所有資料*/<br> \
      freebsd<br> \
      linux<br> \
      solaris<br> \
      sunos<br> \
      windows<br> \
      hello<br> \
      &gt;hello<br> \
      found: hello<br> \
      </font> </td> \
  </tr> \
',
'lfind_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      lfind（線性搜索） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> lsearch<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void *lfind (const void *key,const void *base,size_t  \
      *nmemb,size_t<br> \
      size,int(* compar) (const void * ,const void *));<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> lfind()利用線性搜索在陣列中從頭至尾一項項查找資料。參數key指向欲查找的關鍵資料，參數base指向要被搜索的陣列開頭位址，參數nmemb代表陣列中的元素數量，每一元素的大小則由參數size決定，最後一項參數compar為一函數指標，這個函數用來判斷兩個元素是否相同，若傳給compar  \
      的異地個參數所指的元素資料和第二個參數所指的元素資料相同時則返回0，兩個元素資料不相同則返回非0值。Lfind()與lsearch()不同點在於，當找不到關鍵資料時lfind()僅會返回NULL，而不會主動把該筆資料加入陣列尾端。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 找到關鍵資料則返回找到的該筆元素的位址，如果在陣列中找不到關鍵資料則返回空指標(NULL)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考lsearch()。<br> \
      </font> </td> \
  </tr> \
',
'lsearch_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      lsearch（線性搜索） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> lfind<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void *lsearch(const void * key ,const void  \
      * base ,size_t * nmemb,size_t size, int ( * compar) (const void * ,const  \
      void *));<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> lsearch()利用線性搜索在陣列中從頭至尾一項項查找資料。參數key指向欲查找的關鍵資料，參數base指向要被搜索的陣列開頭位址，參數nmemb  \
      代表陣列中的元素數量，每一元素的大小則由參數size 決定，最後一項參數compar 為一函數指標，這個函數用來判斷兩個元素是否相同，若傳給compar  \
      的第一個參數所指的元素資料和第二個參數所指的元素資料相同時則返回0，兩個元素資料不相同則返回非0 值。如果lsearch（）找不到關鍵資料時會主動把該項資料加入陣列裡。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 找到關鍵資料則返回找到的該筆元素的四肢，如果在陣列中找不到關鍵資料則將此關鍵資料加入陣列，再把加入陣列後的位址返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #include&lt;stdlib.h&gt;<br> \
      #define NMEMB 50<br> \
      #define SIZE 10<br> \
      int compar (comst void *a,const void *b)<br> \
      {<br> \
      return (strcmp((char *) a, (char *) b));<br> \
      }<br> \
      main()<br> \
      {<br> \
      char data[NMEMB][SIZE]={“Linux”,”freebsd”,”solzris”,”sunos”,”windows”};<br> \
      char key[80],*base,*offset;<br> \
      int i, nmemb=NMEMB,size=SIZE;<br> \
      for(i=1;i&lt;5;i++){<br> \
      fgets(key,sizeof9key),stdin);<br> \
      key[strlen(key)-1]=’\0’;<br> \
      base = data[0];<br> \
      offset = (char *)lfind(key,base,&nmemb,size,compar);<br> \
      if(offset ==NULL){<br> \
      printf(“%s not found!\n”,key);<br> \
      offset=(char *) lsearch(key,base,&nmemb,size,compar);<br> \
      printf(“Add %s to data array\n”,offset);<br> \
      }else{<br> \
      printf(“found : %s \n”,offset);<br> \
      }<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> linux<br> \
      found:linux<br> \
      os/2<br> \
      os/2 not found!<br> \
      add os/2 to data array<br> \
      os/2<br> \
      found:os/2<br> \
      </font> </td> \
  </tr> \
',
'qsort_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      qsort（利用快速排序法排列陣列） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> bsearch<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void qsort(void * base,size_t nmemb,size_t  \
      size,int ( * compar)(const void *, const void *));<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參數base指向欲排序的陣列開頭位址，參數nmemb代表陣列中的元素數量，每一元素的大小則由參數size決定，最後一項參數compar為一函數指標，這個函數用來判斷兩個元素間的大小關係，若傳給compar的第一個參數所指的元素資料大於第二個參數所指的元素資料則必須回傳大於零的值，兩個元素資料相等則回傳0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #define nmemb 7<br> \
      #include &lt;stdlib.h&gt;<br> \
      int compar (const void *a ,const void *b)<br> \
      {<br> \
      int *aa=(int * ) a,*bb = (int * )b;<br> \
      if( * aa &gt;* bb)return 1;<br> \
      if( * aa == * bb) return 0;<br> \
      if( * aa &lt; *bb) return -1;<br> \
      }<br> \
      main( )<br> \
      {<br> \
      int base[nmemb]={ 3,102,5,-2,98,52,18};<br> \
      int i;<br> \
      for ( i=0; i&lt;nmemb;i++)<br> \
      printf(“%d “,base[i]);<br> \
      printf(“\n”);<br> \
      qsort(base,nmemb,sizeof(int),compar);<br> \
      for(i=0;i&lt;nmemb;i++)<br> \
      printf(“%d”base[i]);<br> \
      printf(“\n”);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 3 102 5 -2 98 52 18<br> \
      -2 3 5 18 52 98 102<br> \
      </font> </td> \
  </tr> \
',
'rand_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      rand（產生亂數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> srand，random，srandom<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int rand(void)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> rand()會返回一亂數值，範圍在0至RAND_MAX 間。在調用此函數產生亂數前，必須先利用srand()設好亂數種子，如果未設亂數種子，rand()在調用時會自動設亂數種子為1。關於亂數種子請參考srand()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回0至RAND_MAX之間的亂數值，RAND_MAX定義在stdlib.h，其值為2147483647。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 產生介於1 到10 間的亂數值，此範例未設亂數種子，完整的亂數產生請參考<br> \
      srand（）*/<br> \
      #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      int i,j;<br> \
      for(i=0;i&lt;10;i++)<br> \
      {<br> \
      j=1+(int)(10.0*rand()/(RAND_MAX+1.0));<br> \
      printf(“%d “,j);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 9 4 8 8 10 2 4 8 3 6<br> \
      9 4 8 8 10 2 4 8 3 6<br> \
      </font> </td> \
  </tr> \
',
'srand_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      srand（設置亂數種子） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> rand，random srandom<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void srand (unsigned int seed);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> srand()用來設置rand()產生亂數時的亂數種子。參數seed必須是個整數，通常可以利用geypid()或time(0)的返回值來當做seed。如果每次seed都設相同值，rand()所產生的亂數值每次就會一樣。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 產生介於1 到10 間的亂數值，此範例與執行結果可與rand（）參照*/<br> \
      #include&lt;time.h&gt;<br> \
      #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      int i,j;<br> \
      srand((int)time(0));<br> \
      for(i=0;i&lt;10;i++)<br> \
      {<br> \
      j=1+(int)(10.0*rand()/(RAND_MAX+1.0));<br> \
      printf(“ %d “,j);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 5 8 8 8 10 2 10 8 9 9<br> \
      2 9 7 4 10 3 2 10 8 7<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'close_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      close（關閉文件） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，fcntl，shutdown，unlink，fclose<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int close(int fd);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 當使用完檔後若已不再需要則可使用close()關閉該檔，二close()會讓資料寫回磁片，並釋放該檔所佔用的資源。參數fd為先前由open()或creat()所返回的文件描述詞。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若檔順利關閉則返回0，發生錯誤時返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數fd 非有效的文件描述詞或該文件已關閉。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 雖然在進程結束時，系統會自動關閉已打開的檔，但仍建議自行關閉檔，並確實檢查返回值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考open()<br> \
      </font> </td> \
  </tr> \
',
'creat_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      creat（建立文件） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> read，write，fcntl，close，link，stat，umask，unlink，fopen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int creat(const char * pathname, mode_tmode);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參數pathname指向欲建立的檔路徑字串。Creat()相當於使用下列的調用方式調用open()<br> \
      open(const char * pathname ,(O_CREAT|O_WRONLY|O_TRUNC));<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 關於參數mode請參考open（）函數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> creat()會返回新的檔描述詞，若有錯誤發生則會返回-1，並把錯誤代碼設給errno。<br> \
      EEXIST 參數pathname所指的文件已存在。<br> \
      EACCESS 參數pathname 所指定的檔不符合所要求測試的許可權<br> \
      EROFS 欲打開寫入許可權的檔存在於唯讀檔案系統內<br> \
      EFAULT 參數pathname 指標超出可存取的記憶體空間<br> \
      EINVAL 參數mode 不正確。<br> \
      ENAMETOOLONG 參數pathname太長。<br> \
      ENOTDIR 參數pathname為一目錄<br> \
      ENOMEM 核心記憶體不足<br> \
      ELOOP 參數pathname有過多符號連接問題。<br> \
      EMFILE 已達到進程可同時打開的檔數上限<br> \
      ENFILE 已達到系統可同時打開的檔數上限<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> creat()無法建立特別的裝置檔，如果需要請使用mknod()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考open()。<br> \
      </font> </td> \
  </tr> \
',
'dup_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      dup（複製檔描述詞） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，close，fcntl，dup2<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int dup (int oldfd);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> dup()用來複製參數oldfd所指的檔描述詞，並將它返回。此新的檔描述詞和參數oldfd指的是同一個檔，共用所有的鎖定、讀寫位置和各項許可權或旗標。例如，當利用lseek()對某個檔描述詞作用時，另一個檔描述詞的讀寫位置也會隨著改變。不過，檔描述詞之間並不共用close-on-exec旗標。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 當複製成功時，則返回最小及尚未使用的檔描述詞。若有錯誤則返回-1，errno會存放錯誤代碼。錯誤代碼EBADF參數fd非有效的檔描述詞，或該文件已關閉。<br> \
      </font> </td> \
  </tr> \
',
'dup2_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      dup2（複製檔描述詞） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，close，fcntl，dup<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int dup2(int odlfd,int newfd);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> dup2()用來複製參數oldfd所指的檔描述詞，並將它拷貝至參數newfd後一塊返回。若參數newfd為一已打開的文件描述詞，則newfd所指的文件會先被關閉。dup2()所複製的檔描述詞，與原來的檔描述詞共用各種檔狀態，詳情可參考dup()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 當複製成功時，則返回最小及尚未使用的檔描述詞。若有錯誤則返回-1，errno會存放錯誤代碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> dup2()相當於調用fcntl(oldfd，F_DUPFD，newfd)；請參考fcntl()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數fd 非有效的文件描述詞，或該文件已關閉<br> \
      </font> </td> \
  </tr> \
',
'fcntl_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fcntl（檔描述詞操作） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，flock<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fcntl(int fd , int cmd);<br> \
      int fcntl(int fd,int cmd,long arg);<br> \
      int fcntl(int fd,int cmd,struct flock * lock);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fcntl()用來操作檔描述詞的一些特性。參數fd代表欲設置的檔描述詞，參數cmd代表欲操作的指令。<br> \
      有以下幾種情況:<br> \
      F_DUPFD用來查找大於或等於參數arg的最小且仍未使用的檔描述詞，並且複製參數fd的檔描述詞。執行成功則返回新複製的檔描述詞。請參考dup2()。F_GETFD取得close-on-exec旗標。若此旗標的FD_CLOEXEC位為0，代表在調用exec()相關函數時檔將不會關閉。<br> \
      F_SETFD 設置close-on-exec 旗標。該旗標以參數arg 的FD_CLOEXEC位決定。<br> \
      F_GETFL 取得檔描述詞狀態旗標，此旗標為open（）的參數flags。<br> \
      F_SETFL 設置檔描述詞狀態旗標，參數arg為新旗標，但只允許O_APPEND、O_NONBLOCK和O_ASYNC位的改變，其他位的改變將不受影響。<br> \
      F_GETLK 取得檔鎖定的狀態。<br> \
      F_SETLK 設置檔鎖定的狀態。此時flcok 結構的l_type 值必須是F_RDLCK、F_WRLCK或F_UNLCK。如果無法建立鎖定，則返回-1，錯誤代碼為EACCES  \
      或EAGAIN。<br> \
      F_SETLKW F_SETLK 作用相同，但是無法建立鎖定時，此調用會一直等到鎖定動作成功為止。若在等待鎖定的過程中被信號中斷時，會立即返回-1，錯誤代碼為EINTR。參數lock指針為flock  \
      結構指標，定義如下<br> \
      struct flcok<br> \
      {<br> \
      short int l_type; /* 鎖定的狀態*/<br> \
      short int l_whence;/*決定l_start位置*/<br> \
      off_t l_start; /*鎖定區域的開頭位置*/<br> \
      off_t l_len; /*鎖定區域的大小*/<br> \
      pid_t l_pid; /*鎖定動作的進程*/<br> \
      };<br> \
      l_type 有三種狀態:<br> \
      F_RDLCK 建立一個供讀取用的鎖定<br> \
      F_WRLCK 建立一個供寫入用的鎖定<br> \
      F_UNLCK 刪除之前建立的鎖定<br> \
      l_whence 也有三種方式:<br> \
      SEEK_SET 以檔開頭為鎖定的起始位置。<br> \
      SEEK_CUR 以目前檔讀寫位置為鎖定的起始位置<br> \
      SEEK_END 以檔結尾為鎖定的起始位置。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回0，若有錯誤則返回-1，錯誤原因存於errno.<br> \
      </font> </td> \
  </tr> \
',
'flock_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      flock（鎖定文件或解除鎖定） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open,fcntl<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/file.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int flock(int fd,int operation);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> flock()會依參數operation所指定的方式對參數fd所指的檔做各種鎖定或解除鎖定的動作。此函數只能鎖定整個檔，無法鎖定檔的某一區域。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> operation有下列四種情況:<br> \
      LOCK_SH 建立共用鎖定。多個進程可同時對同一個檔作共用鎖定。<br> \
      LOCK_EX 建立互斥鎖定。一個檔同時只有一個互斥鎖定。<br> \
      LOCK_UN 解除檔鎖定狀態。<br> \
      LOCK_NB 無法建立鎖定時，此操作可不被阻斷，馬上返回進程。通常與LOCK_SH或LOCK_EX 做OR(|)組合。<br> \
      單一檔無法同時建立共用鎖定和互斥鎖定，而當使用dup()或fork()時檔描述詞不會繼承此種鎖定。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回0表示成功，若有錯誤則返回-1，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
',
'fsync_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fsync（將緩衝區資料寫回磁片） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sync<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fsync(int fd);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fsync()負責將參數fd所指的檔資料，由系統緩衝區寫回磁片，以確保資料同步。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，errno為錯誤代碼。<br> \
      </font> </td> \
  </tr> \
',
'lseek_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      lseek（移動檔的讀寫位置） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> dup，open，fseek<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> off_t lseek(int fildes,off_t offset ,int whence);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 每一個已打開的檔都有一個讀寫位置，當打開檔時通常其讀寫位置是指向檔開頭，若是以附加的方式打開檔(如O_APPEND)，則讀寫位置會指向檔案結尾。當read()或write()時，讀寫位置會隨之增加，lseek()便是用來控制該檔的讀寫位置。參數fildes  \
      為已打開的文件描述詞，參數offset 為根據參數whence來移動讀寫位置的位移數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> whence為下列其中一種:<br> \
      SEEK_SET 參數offset即為新的讀寫位置。<br> \
      SEEK_CUR 以目前的讀寫位置往後增加offset個位移量。<br> \
      SEEK_END 將讀寫位置指向檔案結尾後再增加offset個位移量。<br> \
      當whence 值為SEEK_CUR 或SEEK_END時，參數offet允許負值的出現。<br> \
      下列是教特別的使用方式:<br> \
      1) 欲將讀寫位置移到檔開頭時:lseek（int fildes,0,SEEK_SET）；<br> \
      2) 欲將讀寫位置移到檔案結尾時:lseek（int fildes，0,SEEK_END）；<br> \
      3) 想要取得目前檔位置時:lseek（int fildes，0,SEEK_CUR）；<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 當調用成功時則返回目前的讀寫位置，也就是距離檔開頭多少個位元組。若有錯誤則返回-1，errno  \
      會存放錯誤代碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> Linux系統不允許lseek（）對tty裝置作用，此項動作會令lseek（）返回ESPIPE。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考本函數說明<br> \
      </font> </td> \
  </tr> \
',
'mkstemp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      mkstemp（建立唯一的暫存檔案） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> mktemp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int mkstemp(char * template);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> mkstemp()用來建立唯一的暫存檔案。參數template 所指的檔案名稱字串中最後六個字元必須是XXXXXX。Mkstemp()會以可讀寫模式和0600  \
      許可權來打開該文件，如果該文件不存在則會建立該文件。打開該文件後其文件描述詞會返回。檔順利打開後返回可讀寫的檔描述詞。若果文件打開失敗則返回NULL，並把錯誤代碼存在errno  \
      中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EINVAL 參數template 字串最後六個字元非XXXXXX。EEXIST 無法建立暫存檔案。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參數template所指的檔案名稱字串必須聲明為陣列，如:<br> \
      char template[ ] =”template-XXXXXX”;<br> \
      千萬不可以使用下列的表達方式<br> \
      char *template = “template-XXXXXX”;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      main( )<br> \
      {<br> \
      int fd;<br> \
      char template[ ]=”template-XXXXXX”;<br> \
      fd=mkstemp(template);<br> \
      printf(“template = %s\n”,template);<br> \
      close(fd);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> template = template-lgZcbo<br> \
      </font> </td> \
  </tr> \
',
'open_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      open（打開文件） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> read，write，fcntl，close，link，stat，umask，unlink，fopen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int open( const char * pathname, int flags);<br> \
      int open( const char * pathname,int flags, mode_t mode);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參數pathname 指向欲打開的檔路徑字串。下列是參數flags 所能使用的旗標:<br> \
      O_RDONLY 以唯讀方式打開檔<br> \
      O_WRONLY 以只寫方式打開檔<br> \
      O_RDWR 以可讀寫方式打開檔。上述三種旗標是互斥的，也就是不可同時使用，但可與下列的旗標利用OR(|)運算子組合。<br> \
      O_CREAT 若欲打開的文件不存在則自動建立該文件。<br> \
      O_EXCL 如果O_CREAT 也被設置，此指令會去檢查檔是否存在。文件若不存在則建立該文件，否則將導致打開檔錯誤。此外，若O_CREAT與O_EXCL同時設置，並且欲打開的檔為符號連接，則會打開檔失敗。<br> \
      O_NOCTTY 如果欲打開的檔為終端機設備時，則不會將該終端機當成進程控制終端機。<br> \
      O_TRUNC 若檔存在並且以可寫的方式打開時，此旗標會令檔長度清為0，而原來存於該檔的資料也會消失。<br> \
      O_APPEND 當讀寫檔時會從檔案結尾開始移動，也就是所寫入的資料會以附加的方式加入到檔後面。<br> \
      O_NONBLOCK 以不可阻斷的方式打開檔，也就是無論有無數據讀取或等待，都會立即返回進程之中。<br> \
      O_NDELAY 同O_NONBLOCK。<br> \
      O_SYNC 以同步的方式打開檔。<br> \
      O_NOFOLLOW 如果參數pathname 所指的檔為一符號連接，則會令打開檔失敗。<br> \
      O_DIRECTORY 如果參數pathname 所指的檔並非為一目錄，則會令打開檔失敗。<br> \
      此為Linux2.2以後特有的旗標，以避免一些系統安全問題。參數mode 則有下列數種組合，只有在建立新檔時才會生效，此外真正建檔時的許可權會受到umask值所影響，因此該檔許可權應該為（mode-umaks）。<br> \
      S_IRWXU00700 許可權，代表該檔所有者具有可讀、可寫及可執行的許可權。<br> \
      S_IRUSR 或S_IREAD，00400許可權，代表該檔所有者具有可讀取的許可權。<br> \
      S_IWUSR 或S_IWRITE，00200 許可權，代表該檔所有者具有可寫入的許可權。<br> \
      S_IXUSR 或S_IEXEC，00100 許可權，代表該檔所有者具有可執行的許可權。<br> \
      S_IRWXG 00070許可權，代表該檔用戶組具有可讀、可寫及可執行的許可權。<br> \
      S_IRGRP 00040 許可權，代表該檔用戶組具有可讀的許可權。<br> \
      S_IWGRP 00020許可權，代表該檔用戶組具有可寫入的許可權。<br> \
      S_IXGRP 00010 許可權，代表該檔用戶組具有可執行的許可權。<br> \
      S_IRWXO 00007許可權，代表其他用戶具有可讀、可寫及可執行的許可權。<br> \
      S_IROTH 00004 許可權，代表其他用戶具有可讀的許可權<br> \
      S_IWOTH 00002許可權，代表其他用戶具有可寫入的許可權。<br> \
      S_IXOTH 00001 許可權，代表其他用戶具有可執行的許可權。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若所有欲核查的許可權都通過了檢查則返回0 值，表示成功，只要有一個許可權被禁止則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EEXIST 參數pathname 所指的檔已存在，卻使用了O_CREAT和O_EXCL旗標。<br> \
      EACCESS 參數pathname所指的檔不符合所要求測試的許可權。<br> \
      EROFS 欲測試寫入許可權的檔存在於唯讀檔案系統內。<br> \
      EFAULT 參數pathname指標超出可存取記憶體空間。<br> \
      EINVAL 參數mode 不正確。<br> \
      ENAMETOOLONG 參數pathname太長。<br> \
      ENOTDIR 參數pathname不是目錄。<br> \
      ENOMEM 核心記憶體不足。<br> \
      ELOOP 參數pathname有過多符號連接問題。<br> \
      EIO I/O 存取錯誤。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 使用access()作用戶認證方面的判斷要特別小心，例如在access()後再作open()空檔可能會造成系統安全上的問題。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      main()<br> \
      {<br> \
      int fd,size;<br> \
      char s [ ]=”Linux Programmer!\n”,buffer[80];<br> \
      fd=open(“/tmp/temp”,O_WRONLY|O_CREAT);<br> \
      write(fd,s,sizeof(s));<br> \
      close(fd);<br> \
      fd=open(“/tmp/temp”,O_RDONLY);<br> \
      size=read(fd,buffer,sizeof(buffer));<br> \
      close(fd);<br> \
      printf(“%s”,buffer);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> Linux Programmer!<br> \
      </font> </td> \
  </tr> \
',
'read_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      read（由已打開的檔讀取資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> readdir，write，fcntl，close，lseek，readlink，fread<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ssize_t read(int fd,void * buf ,size_t count);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> read()會把參數fd 所指的檔傳送count個位元組到buf指標所指的記憶體中。若參數count為0，則read()不會有作用並返回0。返回值為實際讀取到的位元組數，如果返回0，表示已到達檔案結尾或是無可讀取的資料，此外檔讀寫位置會隨讀取到的位元組移動。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果順利read()會返回實際讀到的位元組數，最好能將返回值與參數count 作比較，若返回的位元組數比要求讀取的位元組數少，則有可能讀到了檔案結尾、從管道(pipe)或終端機讀取，或者是read()被信號中斷了讀取動作。當有錯誤發生時則返回-1，錯誤代碼存入errno中，而檔讀寫位置則無法預期。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EINTR 此調用被信號所中斷。<br> \
      EAGAIN 當使用不可阻斷I/O 時（O_NONBLOCK），若無數據可讀取則返回此值。<br> \
      EBADF 參數fd 非有效的文件描述詞，或該文件已關閉。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考open（）。<br> \
      </font> </td> \
  </tr> \
',
'sync_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sync（將緩衝區資料寫回磁片） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fsync<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sync(void)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sync()負責將系統緩衝區資料寫回磁片，以確保資料同步。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回0。<br> \
      </font> </td> \
  </tr> \
',
'write_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      write（將資料寫入已打開的檔內） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，read，fcntl，close，lseek，sync，fsync，fwrite<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ssize_t write (int fd,const void * buf,size_t  \
      count);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> write()會把參數buf所指的記憶體寫入count個位元組到參數fd所指的文件內。當然，檔讀寫位置也會隨之移動。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果順利write()會返回實際寫入的位元組數。當有錯誤發生時則返回-1，錯誤代碼存入errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EINTR 此調用被信號所中斷。<br> \
      EAGAIN 當使用不可阻斷I/O 時（O_NONBLOCK），若無數據可讀取則返回此值。<br> \
      EADF 參數fd非有效的文件描述詞，或該文件已關閉。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考open（）。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'clearerr_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      clearerr（清除檔流的錯誤旗標） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> feof<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void clearerr(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> clearerr（）清除參數stream指定的檔流所使用的錯誤旗標。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
',
'fclose_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fclose（關閉文件） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> close，fflush，fopen，setbuf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fclose(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fclose()用來關閉先前fopen()打開的文件。此動作會讓緩衝區內的資料寫入檔中，並釋放系統所提供的檔資源。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若關檔動作成功則返回0，有錯誤發生時則返回EOF並把錯誤代碼存到errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF表示參數stream非已打開的檔。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考fopen（）。<br> \
      </font> </td> \
  </tr> \
',
'fdopen_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fdopen（將檔描述詞轉為檔指針） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，open，fclose<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> FILE * fdopen(int fildes,const char * mode);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fdopen()會將參數fildes 的檔描述詞，轉換為對應的檔指針後返回。參數mode  \
      字串則代表著檔指標的流形態，此形態必須和原先檔描述詞讀寫模式相同。關於mode 字串格式請參考fopen()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 轉換成功時返回指向該流的檔指標。失敗則返回NULL，並把錯誤代碼存在errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE * fp =fdopen(0,”w+”);<br> \
      fprintf(fp,”%s\n”,”hello!”);<br> \
      fclose(fp);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> hello!<br> \
      </font> </td> \
  </tr> \
',
'feof_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      feof（檢查檔流是否讀到了檔案結尾） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fgetc，fgets，fread<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int feof(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> feof()用來偵測是否讀取到了檔案結尾，尾數stream為fopen（）所返回之文件指針。如果已到檔案結尾則返回非零值，其他情況返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回非零值代表已到達檔案結尾。<br> \
      </font> </td> \
  </tr> \
',
'fflush_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fflush（更新緩衝區） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> write，fopen，fclose，setbuf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fflush(FILE* stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fflush()會強迫將緩衝區內的資料寫回參數stream指定的檔中。如果參數stream為NULL，fflush()會將所有打開的檔資料更新。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功返回0，失敗返回EOF，錯誤代碼存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數stream 指定的文件未被打開，或打開狀態為唯讀。其它錯誤代碼參考write（）。<br> \
      </font> </td> \
  </tr> \
',
'fgetc_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fgetc（由檔中讀取一個字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，fread，fscanf，getc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> nt fgetc(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fgetc()從參數stream所指的檔中讀取一個字元。若讀到檔案結尾而無數據時便返回EOF。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getc()會返回讀取到的字元，若返回EOF則表示到了檔案結尾。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE *fp;<br> \
      int c;<br> \
      fp=fopen(“exist”,”r”);<br> \
      while((c=fgetc(fp))!=EOF)<br> \
      printf(“%c”,c);<br> \
      fclose(fp);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'fgets_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fgets（由檔中讀取一字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，fread，fscanf，getc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> har * fgets(char * s,int size,FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fgets()用來從參數stream所指的檔內讀入字元並存到參數s所指的記憶體空間，直到出現換行字元、讀到檔案結尾或是已讀了size-1個字元為止，最後會加上NULL作為字串結束。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> gets()若成功則返回s指針，返回NULL則表示有錯誤發生。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      char s[80];<br> \
      fputs(fgets(s,80,stdin),stdout);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> this is a test /*輸入*/<br> \
      this is a test /*輸出*/<br> \
      </font> </td> \
  </tr> \
',
'fileno_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fileno（返回檔流所使用的檔描述詞） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，fopen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fileno(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fileno()用來取得參數stream指定的檔流所使用的檔描述詞。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回文件描述詞。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE * fp;<br> \
      int fd;<br> \
      fp=fopen(“/etc/passwd”,”r”);<br> \
      fd=fileno(fp);<br> \
      printf(“fd=%d\n”,fd);<br> \
      fclose(fp);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fd=3<br> \
      </font> </td> \
  </tr> \
',
'fopen_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fopen（打開文件） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，fclose<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> FILE * fopen(const char * path,const char *  \
      mode);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參數path字串包含欲打開的檔路徑及檔案名，參數mode字串則代表著流形態。<br> \
      mode有下列幾種形態字串:<br> \
      r 打開唯讀檔案，該檔必須存在。<br> \
      r+ 打開可讀寫的檔，該檔必須存在。<br> \
      w 打開只寫檔，若檔存在則檔長度清為0，即該檔內容會消失。若文件不存在則建立該文件。<br> \
      w+ 打開可讀寫檔，若檔存在則檔長度清為零，即該檔內容會消失。若文件不存在則建立該文件。<br> \
      a 以附加的方式打開只寫檔。若檔不存在，則會建立該檔，如果檔存在，寫入的資料會被加到檔案結尾，即檔原先的內容會被保留。<br> \
      a+ 以附加方式打開可讀寫的檔。若檔不存在，則會建立該檔，如果檔存在，寫入的資料會被加到檔案結尾後，即檔原先的內容會被保留。<br> \
      上述的形態字串都可以再加一個b字元，如rb、w+b或ab＋等組合，加入b 字元用來告訴函式程式庫打開的檔為二進位檔案，而非純文字檔。不過在POSIX系統，包含Linux都會忽略該字元。由fopen()所建立的新文件會具有S_IRUSR|S_IWUSR|S_IRGRP|S_IWGRP|S_IROTH|S_IWOTH(0666)許可權，此檔許可權也會參考umask值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 檔順利打開後，指向該流的文件指標就會被返回。若果文件打開失敗則返回NULL，並把錯誤代碼存在errno  \
      中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 一般而言，開文件後會作一些文件讀取或寫入的動作，若開檔失敗，接下來的讀寫動作也無法順利進行，所以在fopen()後請作錯誤判斷及處理。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE * fp;<br> \
      fp=fopen(“noexist”,”a+”);<br> \
      if(fp= =NULL) return;<br> \
      fclose(fp);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'fputc_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fputc（將一指定字元寫入檔流中） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fwrite，fscanf，putc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fputc(int c,FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fputc 會將參數c 轉為unsigned char 後寫入參數stream 指定的檔中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fputc()會返回寫入成功的字元，即參數c。若返回EOF則代表寫入失敗。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE * fp;<br> \
      char a[26]=”abcdefghijklmnopqrstuvwxyz”;<br> \
      int i;<br> \
      fp= fopen(“noexist”,”w”);<br> \
      for(i=0;i&lt;26;i++)<br> \
      fputc(a[i],fp);<br> \
      fclose(fp);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'fputs_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fputs（將一指定的字串寫入檔內） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fwrite，fscanf，fputc，putc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fputs(const char * s,FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fputs()用來將參數s所指的字串寫入到參數stream所指的文件內。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若成功則返回寫出的字元個數，返回EOF則表示有錯誤發生。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考fgets（）。<br> \
      </font> </td> \
  </tr> \
',
'fread_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fread（從檔流讀取資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fwrite，fseek，fscanf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> size_t fread(void * ptr,size_t size,size_t  \
      nmemb,FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fread()用來從檔流中讀取資料。參數stream為已打開的文件指針，參數ptr  \
      指向欲存放讀取進來的資料空間，讀取的字元數以參數size*nmemb來決定。Fread()會返回實際讀取到的nmemb數目，如果此值比參數nmemb  \
      來得小，則代表可能讀到了檔案結尾或有錯誤發生，這時必須用feof()或ferror()來決定發生什麼情況。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回實際讀取到的nmemb數目。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #define nmemb 3<br> \
      struct test<br> \
      {<br> \
      char name[20];<br> \
      int size;<br> \
      }s[nmemb];<br> \
      main()<br> \
      {<br> \
      FILE * stream;<br> \
      int i;<br> \
      stream = fopen(“/tmp/fwrite”,”r”);<br> \
      fread(s,sizeof(struct test),nmemb,stream);<br> \
      fclose(stream);<br> \
      for(i=0;i&lt;nmemb;i++)<br> \
      printf(“name[%d]=%-20s:size[%d]=%d\n”,i,s[i].name,i,s[i].size);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> name[0]=Linux! size[0]=6<br> \
      name[1]=FreeBSD! size[1]=8<br> \
      name[2]=Windows2000 size[2]=11<br> \
      </font> </td> \
  </tr> \
',
'freopen_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      freopen（打開文件） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fclose<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> FILE * freopen(const char * path,const char  \
      * mode,FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參數path字串包含欲打開的檔路徑及檔案名，參數mode請參考fopen()說明。參數stream為已打開的文件指針。Freopen()會將原stream所打開的文件流關閉，然後打開參數path的文件。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 檔順利打開後，指向該流的文件指標就會被返回。如果檔打開失敗則返回NULL，並把錯誤代碼存在errno  \
      中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE * fp;<br> \
      fp=fopen(“/etc/passwd”,”r”);<br> \
      fp=freopen(“/etc/group”,”r”,fp);<br> \
      fclose(fp);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'fseek_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fseek（移動檔流的讀寫位置） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> rewind，ftell，fgetpos，fsetpos，lseek<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fseek(FILE * stream,long offset,int whence);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fseek()用來移動檔流的讀寫位置。參數stream為已打開的文件指標，參數offset為根據參數whence來移動讀寫位置的位移數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> whence為下列其中一種:<br> \
      SEEK_SET從距檔開頭offset位移量為新的讀寫位置。SEEK_CUR 以目前的讀寫位置往後增加offset個位移量。<br> \
      SEEK_END將讀寫位置指向檔案結尾後再增加offset個位移量。<br> \
      當whence值為SEEK_CUR 或SEEK_END時，參數offset允許負值的出現。<br> \
      下列是較特別的使用方式:<br> \
      1) 欲將讀寫位置移動到檔開頭時:fseek(FILE *stream,0,SEEK_SET);<br> \
      2) 欲將讀寫位置移動到檔案結尾時:fseek(FILE *stream,0,0SEEK_END);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 當調用成功時則返回0，若有錯誤則返回-1，errno會存放錯誤代碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fseek()不像lseek()會返回讀寫位置，因此必須使用ftell()來取得目前讀寫的位置。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE * stream;<br> \
      long offset;<br> \
      fpos_t pos;<br> \
      stream=fopen(“/etc/passwd”,”r”);<br> \
      fseek(stream,5,SEEK_SET);<br> \
      printf(“offset=%d\n”,ftell(stream));<br> \
      rewind(stream);<br> \
      fgetpos(stream,&pos);<br> \
      printf(“offset=%d\n”,pos);<br> \
      pos=10;<br> \
      fsetpos(stream,&pos);<br> \
      printf(“offset = %d\n”,ftell(stream));<br> \
      fclose(stream);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> offset = 5<br> \
      offset =0<br> \
      offset=10<br> \
      </font> </td> \
  </tr> \
',
'ftell_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      ftell（取得檔流的讀取位置） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fseek，rewind，fgetpos，fsetpos<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> long ftell(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ftell()用來取得檔流目前的讀寫位置。參數stream為已打開的文件指針。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 當調用成功時則返回目前的讀寫位置，若有錯誤則返回-1，errno會存放錯誤代碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數stream無效或可移動讀寫位置的檔流。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考fseek()。<br> \
      </font> </td> \
  </tr> \
',
'fwrite_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fwrite（將資料寫至檔流） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fread，fseek，fscanf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> size_t fwrite(const void * ptr,size_t size,size_t  \
      nmemb,FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fwrite()用來將資料寫入檔流中。參數stream為已打開的文件指針，參數ptr  \
      指向欲寫入的資料位址，總共寫入的字元數以參數size*nmemb來決定。Fwrite()會返回實際寫入的nmemb數目。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回實際寫入的nmemb數目。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #define set_s (x,y) {strcoy(s[x].name,y);s[x].size=strlen(y);}<br> \
      #define nmemb 3<br> \
      struct test<br> \
      {<br> \
      char name[20];<br> \
      int size;<br> \
      }s[nmemb];<br> \
      main()<br> \
      {<br> \
      FILE * stream;<br> \
      set_s(0,”Linux!”);<br> \
      set_s(1,”FreeBSD!”);<br> \
      set_s(2,”Windows2000.”);<br> \
      stream=fopen(“/tmp/fwrite”,”w”);<br> \
      fwrite(s,sizeof(struct test),nmemb,stream);<br> \
      fclose(stream);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考fread（）。<br> \
      </font> </td> \
  </tr> \
',
'getc_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getc（由檔中讀取一個字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> read，fopen，fread，fgetc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int getc(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getc()用來從參數stream所指的檔中讀取一個字元。若讀到檔案結尾而無數據時便返回EOF。雖然getc()與fgetc()作用相同，但getc()為巨集定義，非真正的函式呼叫。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getc()會返回讀取到的字元，若返回EOF則表示到了檔案結尾。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考fgetc()。<br> \
      </font> </td> \
  </tr> \
',
'getchar_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getchar（由標準輸入裝置內讀進一字元） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fread，fscanf，getc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int getchar(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getchar()用來從標準輸入裝置中讀取一個字元。然後將該字元從unsigned char轉換成int後返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getchar()會返回讀取到的字元，若返回EOF則表示有錯誤發生。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getchar()非真正函數，而是getc(stdin)巨集定義。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE * fp;<br> \
      int c,i;<br> \
      for(i=0li&lt;5;i++)<br> \
      {<br> \
      c=getchar();<br> \
      putchar(c);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 1234 /*輸入*/<br> \
      1234 /*輸出*/<br> \
      </font> </td> \
  </tr> \
',
'gets_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      gets（由標準輸入裝置內讀進一字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fread，fscanf，fgets<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> char * gets(char *s);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> gets()用來從標準設備讀入字元並存到參數s所指的記憶體空間，直到出現換行字元或讀到檔案結尾為止，最後加上NULL作為字串結束。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> gets()若成功則返回s指針，返回NULL則表示有錯誤發生。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 由於gets()無法知道字串s的大小，必須遇到換行字元或檔案結尾才會結束輸入，因此容易造成緩衝溢出的安全性問題。建議使用fgets()取代。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考fgets()<br> \
      </font> </td> \
  </tr> \
',
'mktemp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      mktemp（產生唯一的暫存檔案名） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> tmpfile<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> char * mktemp(char * template);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> mktemp()用來產生唯一的暫存檔案名。參數template所指的檔案名稱字串中最後六個字元必須是XXXXXX。產生後的檔案名會借字串指標返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 檔順利打開後，指向該流的文件指標就會被返回。如果檔打開失敗則返回NULL，並把錯誤代碼存在errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參數template所指的檔案名稱字串必須聲明為陣列，如:<br> \
      char template[ ]=”template-XXXXXX”；<br> \
      不可用char * template=”template-XXXXXX”；<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      char template[ ]=”template-XXXXXX”;<br> \
      mktemp(template);<br> \
      printf(“template=%s\n”,template);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'putc_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      putc（將一指定字元寫入檔中） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fwrite，fscanf，fputc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int putc(int c,FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> putc()會將參數c轉為unsigned char後寫入參數stream指定的檔中。雖然putc()與fputc()作用相同，但putc()為巨集定義，非真正的函式呼叫。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> putc()會返回寫入成功的字元，即參數c。若返回EOF則代表寫入失敗。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考fputc（）。<br> \
      </font> </td> \
  </tr> \
',
'putchar_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      putchar（將指定的字元寫到標準輸出設備） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fopen，fwrite，fscanf，fputc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int putchar (int c);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> putchar()用來將參數c字元寫到標準輸出設備。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> putchar()會返回輸出成功的字元，即參數c。若返回EOF則代表輸出失敗。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> putchar()非真正函數，而是putc(c，stdout)巨集定義。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考getchar()。<br> \
      </font> </td> \
  </tr> \
',
'rewind_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      rewind（重設檔流的讀寫位置為檔開頭） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fseek，ftell，fgetpos，fsetpos<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void rewind(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> rewind()用來把檔流的讀寫位置移至檔開頭。參數stream為已打開的文件指針。此函數相當於調用fseek(stream,0,SEEK_SET)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考fseek()<br> \
      </font> </td> \
  </tr> \
',
'setbuf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      setbuf（設置檔流的緩衝區） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setbuffer，setlinebuf，setvbuf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void setbuf(FILE * stream,char * buf);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 在打開檔流後，讀取內容之前，調用setbuf()可以用來設置檔流的緩衝區。參數stream為指定的檔流，參數buf指向自定的緩衝區起始位址。如果參數buf為NULL指針，則為無緩衝IO。Setbuf()相當於調用:setvbuf(stream,buf,buf?_IOFBF:_IONBF,BUFSIZ)  \
      <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
',
'setbuffer_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      setbuffer（設置檔流的緩衝區） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setlinebuf，setbuf，setvbuf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void setbuffer(FILE * stream,char * buf,size_t  \
      size);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 在打開檔流後，讀取內容之前，調用setbuffer()可用來設置檔流的緩衝區。參數stream為指定的檔流，參數buf指向自定的緩衝區起始位址，參數size為緩衝區大小。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
',
'setlinebuf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      setlinebuf（設置檔流為線性緩衝區） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setbuffer，setbuf，setvbuf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void setlinebuf(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setlinebuf()用來設置檔流以換行為依據的無緩衝IO。相當於調用:setvbuf(stream,(char  \
      * )NULL,_IOLBF,0);請參考setvbuf()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
',
'setvbuf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      setvbuf（設置檔流的緩衝區） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setbuffer，setlinebuf，setbuf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int setvbuf(FILE * stream,char * buf,int mode,size_t  \
      size);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 在打開檔流後，讀取內容之前，調用setvbuf()可以用來設置檔流的緩衝區。參數stream為指定的檔流，參數buf指向自定的緩衝區起始位址，參數size為緩衝區大小，參數mode有下列幾種<br> \
      _IONBF 無緩衝IO<br> \
      _IOLBF 以換行為依據的無緩衝IO<br> \
      _IOFBF 完全無緩衝IO。如果參數buf為NULL指針，則為無緩衝IO。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
',
'ungetc_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      ungetc（將指定字元寫回檔流中） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fputc，getchar，getc<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int ungetc(int c,FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ungetc()將參數c字元寫回參數stream所指定的檔流。這個寫回的字元會由下一個讀取檔流的函數取得。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回c 字元，若有錯誤則返回EOF。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'atexit_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      atexit（設置程式正常結束前調用的函數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> _exit,exit,on_exit<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int atexit (void (*function)(void));<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> atexit()用來設置一個程式正常結束前調用的函數。當程式通過調用exit()或從main中返回時，參數function所指定的函數會先被調用，然後才真正由exit()結束程式。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則返回0，否則返回-1，失敗原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      void my_exit(void)<br> \
      {<br> \
      printf(“before exit () !\n”);<br> \
      }<br> \
      main()<br> \
      {<br> \
      atexit (my_exit);<br> \
      exit(0);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> before exit()!<br> \
      </font> </td> \
  </tr> \
',
'execl_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      execl（執行檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fork，execle，execlp，execv，execve，execvp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int execl(const char * path,const char * arg,....);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> execl()用來執行參數path字串所代表的檔路徑，接下來的參數代表執行該檔時傳遞過去的argv(0)、argv[1]……，最後一個參數必須用空指標(NULL)作結束。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則函數不會返回，執行失敗則直接返回-1，失敗原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      execl(“/bin/ls”,”ls”,”-al”,”/etc/passwd”,(char * )0);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /*執行/bin/ls -al /etc/passwd */<br> \
      -rw-r--r-- 1 root root 705 Sep 3 13 :52 /etc/passwd<br> \
      </font> </td> \
  </tr> \
',
'execlp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      execlp（從PATH 環境變數中查找檔並執行） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fork，execl，execle，execv，execve，execvp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int execlp(const char * file,const char * arg,……)；<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> execlp()會從PATH 環境變數所指的目錄中查找符合參數file的檔案名，找到後便執行該檔，然後將第二個以後的參數當做該檔的argv[0]、argv[1]……，最後一個參數必須用空指標(NULL)作結束。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則函數不會返回，執行失敗則直接返回-1，失敗原因存於errno 中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考execve()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 執行ls -al /etc/passwd execlp()會依PATH 變數中的/bin找到/bin/ls  \
      */<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      execlp(“ls”,”ls”,”-al”,”/etc/passwd”,(char *)0);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> -rw-r--r-- 1 root root 705 Sep 3 13 :52 /etc/passwd<br> \
      </font> </td> \
  </tr> \
',
'execv_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      execv（執行檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fork，execl，execle，execlp，execve，execvp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int execv (const char * path, char * const  \
      argv[ ]);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> execv()用來執行參數path字串所代表的檔路徑，與execl()不同的地方在於execve()只需兩個參數，第二個參數利用陣列指標來傳遞給執行檔。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則函數不會返回，執行失敗則直接返回-1，失敗原因存於errno 中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考execve（）。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 執行/bin/ls -al /etc/passwd */<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      char * argv[ ]={“ls”,”-al”,”/etc/passwd”,(char*) }};<br> \
      execv(“/bin/ls”,argv);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> -rw-r--r-- 1 root root 705 Sep 3 13 :52 /etc/passwd<br> \
      </font> </td> \
  </tr> \
',
'execve_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      execve（執行檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fork，execl，execle，execlp，execv，execvp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int execve(const char * filename,char * const  \
      argv[ ],char * const envp[ ]);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> execve()用來執行參數filename字串所代表的檔路徑，第二個參數系利用陣列指標來傳遞給執行檔，最後一個參數則為傳遞給執行檔的新環境變數陣列。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則函數不會返回，執行失敗則直接返回-1，失敗原因存於errno 中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EACCES<br> \
      1. 欲執行的檔不具有用戶可執行的許可權。<br> \
      2. 欲執行的檔所屬的檔案系統是以noexec 方式掛上。<br> \
      3.欲執行的檔或script翻譯器非一般檔。<br> \
      EPERM<br> \
      1.進程處於被追蹤模式，執行者並不具有root許可權，欲執行的檔具有SUID 或SGID 位。<br> \
      2.欲執行的檔所屬的檔案系統是以nosuid方式掛上，欲執行的檔具有SUID 或SGID 位元，但執行者並不具有root許可權。<br> \
      E2BIG 參數陣列過大<br> \
      ENOEXEC 無法判斷欲執行檔的執行檔案格式，有可能是格式錯誤或無法在此平臺執行。<br> \
      EFAULT 參數filename所指的字串位址超出可存取空間範圍。<br> \
      ENAMETOOLONG 參數filename所指的字串太長。<br> \
      ENOENT 參數filename字串所指定的檔不存在。<br> \
      ENOMEM 核心記憶體不足<br> \
      ENOTDIR 參數filename字串所包含的目錄路徑並非有效目錄<br> \
      EACCES 參數filename字串所包含的目錄路徑無法存取，許可權不足<br> \
      ELOOP 過多的符號連接<br> \
      ETXTBUSY 欲執行的檔已被其他進程打開而且正把資料寫入該檔中<br> \
      EIO I/O 存取錯誤<br> \
      ENFILE 已達到系統所允許的打開檔總數。<br> \
      EMFILE 已達到系統所允許單一進程所能打開的檔總數。<br> \
      EINVAL 欲執行檔的ELF執行格式不只一個PT_INTERP節區<br> \
      EISDIR ELF翻譯器為一目錄<br> \
      ELIBBAD ELF翻譯器有問題。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      char * argv[ ]={“ls”,”-al”,”/etc/passwd”,(char *)0};<br> \
      char * envp[ ]={“PATH=/bin”,0}<br> \
      execve(“/bin/ls”,argv,envp);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> -rw-r--r-- 1 root root 705 Sep 3 13 :52 /etc/passwd<br> \
      </font> </td> \
  </tr> \
',
'execvp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      execvp（執行檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fork，execl，execle，execlp，execv，execve<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int execvp(const char *file ,char * const argv  \
      []);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> execvp()會從PATH 環境變數所指的目錄中查找符合參數file 的檔案名，找到後便執行該檔，然後將第二個參數argv傳給該欲執行的檔。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則函數不會返回，執行失敗則直接返回-1，失敗原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考execve（）。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /*請與execlp（）範例對照*/<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      char * argv[ ] ={ “ls”,”-al”,”/etc/passwd”,0};<br> \
      execvp(“ls”,argv);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> -rw-r--r-- 1 root root 705 Sep 3 13 :52 /etc/passwd<br> \
      </font> </td> \
  </tr> \
',
'exit_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      exit（正常結束進程） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> _exit，atexit，on_exit<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void exit(int status);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> exit()用來正常終結目前進程的執行，並把參數status返回給父進程，而進程所有的緩衝區資料會自動寫回並關閉未關閉的檔。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考wait（）<br> \
      </font> </td> \
  </tr> \
',
'_exit_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        _ </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      exit（結束進程執行） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> exit，wait，abort<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void _exit(int status);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> _exit()用來立刻結束目前進程的執行，並把參數status返回給父進程，並關閉未關閉的文件。此函式呼叫後不會返回，並且會傳遞SIGCHLD信號給父進程，父進程可以由wait函數取得子進程結束狀態。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> _exit（）不會處理標準I/O 緩衝區，如要更新緩衝區請使用exit（）。<br> \
      </font> </td> \
  </tr> \
',
'vfork_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      vfork（建立一個新的進程） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> wait，execve<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pid_t vfork(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vfork()會產生一個新的子進程，其子進程會複製父進程的資料與堆疊空間，並繼承父進程的使用者代碼，組代碼，環境變數、已打開的檔代碼、工作目錄和資源限制等。Linux  \
      使用copy-on-write(COW)技術，只有當其中一進程試圖修改欲複製的空間時才會做真正的複製動作，由於這些繼承的資訊是複製而來，並非指相同的記憶體空間，因此子進程對這些變數的修改和父進程並不會同步。此外，子進程不會繼承父進程的檔鎖定和未處理的信號。注意，Linux不保證子進程會比父進程先執行或晚執行，因此編寫程式時要留意<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 鎖死或競爭條件的發生。 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果vfork()成功則在父進程會返回新建立的子進程代碼(PID)，而在新建立的子進程中則返回0。如果vfork  \
      失敗則直接返回-1，失敗原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EAGAIN 記憶體不足。ENOMEM 記憶體不足，無法配置核心所需的資料結構空間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      if(vfork() = =0)<br> \
      {<br> \
      printf(“This is the child process\n”);<br> \
      }else{<br> \
      printf(“This is the parent process\n”);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> this is the parent process<br> \
      this is the child process<br> \
      </font> </td> \
  </tr> \
',
'getpgid_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getpgid（取得進程組識別碼） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setpgid，setpgrp，getpgrp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pid_t getpgid( pid_t pid);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getpgid()用來取得參數pid 指定進程所屬的組識別碼。如果參數pid為0，則會取得目前進程的組識別碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回組識別碼，如果有錯誤則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ESRCH 找不到符合參數pid 指定的進程。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /*取得init 進程（pid＝1）的組識別碼*/<br> \
      #include&lt;unistd.h&gt;<br> \
      mian()<br> \
      {<br> \
      printf(“init gid = %d\n”,getpgid(1));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> init gid = 0<br> \
      </font> </td> \
  </tr> \
',
'getpgrp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getpgrp（取得進程組識別碼） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setpgid，getpgid，getpgrp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pid_t getpgrp(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getpgrp()用來取得目前進程所屬的組識別碼。此函數相當於調用getpgid(0)；<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回目前進程所屬的組識別碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      printf(“my gid =%d\n”,getpgrp());<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> my gid =29546<br> \
      </font> </td> \
  </tr> \
',
'getpid_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getpid（取得進程識別碼） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fork，kill，getpid<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pid_t getpid(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getpid（）用來取得目前進程的進程識別碼，許多程式利用取到的此值來建立暫存檔案，以避免暫存檔案相同帶來的問題。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 目前進程的進程識別碼<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      printf(“pid=%d\n”,getpid());<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pid=1494 /*每次執行結果都不一定相同*/<br> \
      </font> </td> \
  </tr> \
',
'getppid_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getppid（取得父進程的進程識別碼） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fork，kill，getpid<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pid_t getppid(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getppid()用來取得目前進程的父進程識別碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 目前進程的父進程識別碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      printf(“My parent ‘pid =%d\n”,getppid());<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> My parent pid =463<br> \
      </font> </td> \
  </tr> \
',
'getpriority_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getpriority（取得程式進程執行優先權） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setpriority，nice<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/time.h&gt;<br> \
      #include&lt;sys/resource.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int getpriority(int which,int who);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getpriority()可用來取得進程、進程組和使用者的進程執行優先權。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> which有三種數值，參數who 則依which值有不同定義<br> \
      which who 代表的意義<br> \
      PRIO_PROCESS who 為進程識別碼<br> \
      PRIO_PGRP who 為進程的組識別碼<br> \
      PRIO_USER who 為用戶識別碼<br> \
      此函數返回的數值介於-20 至20之間，代表進程執行優先權，數值越低代表有較高的優先次序，執行會較頻繁。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回進程執行優先權，如有錯誤發生返回值則為-1 且錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 由於返回值有可能是-1，因此要同時檢查errno是否存有錯誤原因。最好在調用次函數前先清除errno變數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ESRCH 參數which或who 可能有錯，而找不到符合的進程。EINVAL 參數which  \
      值錯誤。<br> \
      </font> </td> \
  </tr> \
',
'nice_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      nice（改變進程優先順序） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setpriority，getpriority<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int nice(int inc);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> nice()用來改變進程的進程執行優先順序。參數inc數值越大則優先順序排在越後面，即表示進程執行會越慢。只有超級用戶才能使用負的inc  \
      值，代表優先順序排在前面，進程執行會較快。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則返回0，否則返回-1，失敗原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EPERM 一般用戶企圖轉用負的參數inc值改變進程優先順序。<br> \
      </font> </td> \
  </tr> \
',
'on_exit_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      on_exit（設置程式正常結束前調用的函數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> _exit，atexit，exit<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int on_exit(void (* function)(int, void*),void  \
      *arg);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> on_exit()用來設置一個程式正常結束前調用的函數。當程式通過調用exit()或從main中返回時，參數function所指定的函數會先被調用，然後才真正由exit()結束程式。參數arg指標會傳給參數function函數，詳細情況請見範例。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則返回0，否則返回-1，失敗原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      void my_exit(int status,void *arg)<br> \
      {<br> \
      printf(“before exit()!\n”);<br> \
      printf(“exit (%d)\n”,status);<br> \
      printf(“arg = %s\n”,(char*)arg);<br> \
      }<br> \
      main()<br> \
      {<br> \
      char * str=”test”;<br> \
      on_exit(my_exit,(void *)str);<br> \
      exit(1234);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> before exit()!<br> \
      exit (1234)<br> \
      arg = test<br> \
      </font> </td> \
  </tr> \
',
'setpgid_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      setpgid（設置進程組識別碼） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getpgid，setpgrp，getpgrp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int setpgid(pid_t pid,pid_t pgid);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setpgid()將參數pid 指定進程所屬的組識別碼設為參數pgid 指定的組識別碼。如果參數pid  \
      為0，則會用來設置目前進程的組識別碼，如果參數pgid為0，則會以目前進程的進程識別碼來取代。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回組識別碼，如果有錯誤則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EINVAL 參數pgid小於0。<br> \
      EPERM 進程許可權不足，無法完成調用。<br> \
      ESRCH 找不到符合參數pid指定的進程。<br> \
      </font> </td> \
  </tr> \
',
'setpgrp_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      setpgrp（設置進程組識別碼） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getpgid，setpgid，getpgrp<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int setpgrp(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setpgrp()將目前進程所屬的組識別碼設為目前進程的進程識別碼。此函數相當於調用setpgid(0,0)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回組識別碼，如果有錯誤則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
',
'setpriority_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      setpriority（設置程式進程執行優先權） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getpriority，nice<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/time.h&gt;<br> \
      #include&lt;sys/resource.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int setpriority(int which,int who, int prio);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setpriority()可用來設置進程、進程組和使用者的進程執行優先權。參數which有三種數值，參數who  \
      則依which值有不同定義<br> \
      which who 代表的意義<br> \
      PRIO_PROCESS who為進程識別碼<br> \
      PRIO_PGRP who 為進程的組識別碼<br> \
      PRIO_USER who為用戶識別碼<br> \
      參數prio介於-20 至20 之間。代表進程執行優先權，數值越低代表有較高的優先次序，執行會較頻繁。此優先權默認是0，而只有超級用戶（root）允許降低此值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，如果有錯誤發生返回值則為-1，錯誤原因存於errno。<br> \
      ESRCH 參數which或who 可能有錯，而找不到符合的進程<br> \
      EINVAL 參數which值錯誤。<br> \
      EPERM 許可權不夠，無法完成設置<br> \
      EACCES 一般用戶無法降低優先權<br> \
      </font> </td> \
  </tr> \
',
'system_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      system（執行shell 命令） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fork，execve，waitpid，popen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int system(const char * string);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> system()會調用fork()產生子進程，由子進程來調用/bin/sh-c string來執行參數string字串所代表的命令，此命令執行完後隨即返回原調用的進程。在調用system()期間SIGCHLD  \
      信號會被暫時擱置，SIGINT和SIGQUIT 信號則會被忽略。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果system()在調用/bin/sh時失敗則返回127，其他失敗原因返回-1。若參數string為空指針(NULL)，則返回非零值。如果system()調用成功則最後會返回執行shell命令後的返回值，但是此返回值也有可能為system()調用/bin/sh失敗所返回的127，因此最好能再檢查errno  \
      來確認執行成功。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 在編寫具有SUID/SGID許可權的程式時請勿使用system()，system()會繼承環境變數，通過環境變數可能會造成系統安全的問題。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      system(“ls -al /etc/passwd /etc/shadow”);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> -rw-r--r-- 1 root root 705 Sep 3 13 :52 /etc/passwd<br> \
      -r--------- 1 root root 572 Sep 2 15 :34 /etc/shadow<br> \
      </font> </td> \
  </tr> \
',
'wait_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      wait（等待子進程中斷或結束） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> waitpid，fork<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/wait.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pid_t wait (int * status);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> wait()會暫時停止目前進程的執行，直到有信號來到或子進程結束。如果在調用wait()時子進程已經結束，則wait()會立即返回子進程結束狀態值。子進程的結束狀態值會由參數status  \
      返回，而子進程的進程識別碼也會一快返回。如果不在意結束狀態值，則<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> status可以設成NULL。子進程的結束狀態值請參考waitpid()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則返回子進程識別碼(PID)，如果有錯誤發生則返回-1。失敗原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/wait.h&gt;<br> \
      main()<br> \
      {<br> \
      pid_t pid;<br> \
      int status,i;<br> \
      if(fork()= =0){<br> \
      printf(“This is the child process .pid =%d\n”,getpid());<br> \
      exit(5);<br> \
      }else{<br> \
      sleep(1);<br> \
      printf(“This is the parent process ,wait for child...\n”;<br> \
      pid=wait(&status);<br> \
      i=WEXITSTATUS(status);<br> \
      printf(“child’s pid =%d .exit status=^d\n”,pid,i);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> This is the child process.pid=1501<br> \
      This is the parent process .wait for child...<br> \
      child’s pid =1501,exit status =5<br> \
      </font> </td> \
  </tr> \
',
'waitpid_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      waitpid（等待子進程中斷或結束） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> wait，fork<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/wait.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pid_t waitpid(pid_t pid,int * status,int options);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> waitpid()會暫時停止目前進程的執行，直到有信號來到或子進程結束。如果在調用wait()時子進程已經結束，則wait()會立即返回子進程結束狀態值。子進程的結束狀態值會由參數status返回，而子進程的進程識別碼也會一快返回。如果不在意結束狀態值，則參數status可以設成NULL。參數pid為欲等待的子進程識別碼，其他數值意義如下:<br> \
      pid&lt;-1 等待進程組識別碼為pid絕對值的任何子進程。<br> \
      pid=-1 等待任何子進程，相當於wait()。<br> \
      pid=0 等待進程組識別碼與目前進程相同的任何子進程。<br> \
      pid&gt;0 等待任何子進程識別碼為pid的子進程。<br> \
      參數option可以為0 或下面的OR 組合<br> \
      WNOHANG 如果沒有任何已經結束的子進程則馬上返回，不予以等待。<br> \
      WUNTRACED 如果子進程進入暫停執行情況則馬上返回，但結束狀態不予以理會。<br> \
      子進程的結束狀態返回後存於status，底下有幾個巨集可判別結束情況<br> \
      WIFEXITED(status)如果子進程正常結束則為非0值。<br> \
      WEXITSTATUS(status)取得子進程exit()返回的結束代碼，一般會先用WIFEXITED 來判斷是否正常結束才能使用此宏。<br> \
      WIFSIGNALED(status)如果子進程是因為信號而結束則此巨集值為真<br> \
      WTERMSIG(status)取得子進程因信號而中止的信號代碼，一般會先用WIFSIGNALED 來判斷後才使用此宏。<br> \
      WIFSTOPPED(status)如果子進程處於暫停執行情況則此巨集值為真。一般只有使用WUNTRACED 時才會有此情況。<br> \
      WSTOPSIG(status)取得引發子進程暫停的信號代碼，一般會先用WIFSTOPPED 來判斷後才使用此宏。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果執行成功則返回子進程識別碼(PID)，如果有錯誤發生則返回-1。失敗原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考wait()。<br> \
      </font> </td> \
  </tr> \
',
'fprintf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fprintf（格式化輸出資料至檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> printf，fscanf，vfprintf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fprintf(FILE * stream, const char * format,.......);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fprintf()會根據參數format字串來轉換並格式化資料，然後將結果輸出到參數stream指定的檔中，直到出現字串結束("\0")為止。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 關於參數format字串的格式請參考printf()。成功則返回實際輸出的字元數，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      int i = 150;<br> \
      int j = -100;<br> \
      double k = 3.14159;<br> \
      fprintf(stdout,”%d %f %x \n”,j,k,i);<br> \
      fprintf(stdout,”%2d %*d\n”,i,2,i);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> -100 3.141590 96<br> \
      150 150<br> \
      </font> </td> \
  </tr> \
',
'fscanf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fscanf（格式化字串輸入） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> scanf，sscanf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fscanf(FILE * stream ,const char *format,....);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fscanf()會自參數stream的檔流中讀取字串，再根據參數format字串來轉換並格式化資料。格式轉換形式請參考scanf()。轉換後的結構存於對應的參數內。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回參數數目，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      int i;<br> \
      unsigned int j;<br> \
      char s[5];<br> \
      fscanf(stdin,”%d %x %5[a-z] %*s %f”,&i,&j,s,s);<br> \
      printf(“%d %d %s \n”,i,j,s);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 10 0x1b aaaaaaaaa bbbbbbbbbb /*從鍵盤輸入*/<br> \
      10 27 aaaaa<br> \
      </font> </td> \
  </tr> \
',
'printf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      printf（格式化輸出資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> scanf，snprintf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int printf(const char * format,.............);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> printf()會根據參數format字串來轉換並格式化資料，然後將結果寫出到標準輸出設備，直到出現字串結束("\0")為止。參數format字串可包含下列三種字元類型<br> \
      1.一般文本，伴隨直接輸出。<br> \
      2.ASCII控制字元，如\t、\n等。<br> \
      3.格式轉換字元。<br> \
      格式轉換為一個百分比符號(％)及其後的格式字元所組成。一般而言，每個％符號在其後都必需有一printf()的參數與之相呼應（只有當％％轉換字元出現時會直接輸出％字元），而欲輸出的資料類型必須與其相對應的轉換字元類型相同。<br> \
      Printf()格式轉換的一般形式如下<br> \
      ％(flags)(width)(.prec)type<br> \
      以中括弧括起來的參數為選擇性參數，而％與type則是必要的。底下先介紹type的幾種形式<br> \
      整數<br> \
      ％d 整數的參數會被轉成一有符號的十進位數字字<br> \
      ％u 整數的參數會被轉成一無符號的十進位數字字<br> \
      ％o 整數的參數會被轉成一無符號的八進位數字<br> \
      ％x 整數的參數會被轉成一無符號的十六進位數位，並以小寫abcdef表示<br> \
      ％X 整數的參數會被轉成一無符號的十六進位數位，並以大寫ABCDEF表示浮點型數<br> \
      ％f double 型的參數會被轉成十進位數字字，並取到小數點以下六位，四捨五入。<br> \
      ％e double型的參數以指數形式列印，有一個數字會在小數點前，六位元數字在小數點後，而在指數部分會以小寫的e來表示。<br> \
      ％E 與％e作用相同，唯一區別是指數部分將以大寫的E 來表示。<br> \
      ％g double 型的參數會自動選擇以％f 或％e 的格式來列印，其標準是根據欲列印的數值及所設置的有效位數來決定。<br> \
      ％G 與％g 作用相同，唯一區別在以指數形態列印時會選擇％E 格式。<br> \
      字元及字串<br> \
      ％c 整型數的參數會被轉成unsigned char型列印出。<br> \
      ％s 指向字串的參數會被逐字輸出，直到出現NULL字元為止<br> \
      ％p 如果是參數是“void *”型指標則使用十六進位格式顯示。<br> \
      prec 有幾種情況<br> \
      1. 正整數的最小位元數。<br> \
      2.在浮點型數中代表小數位數<br> \
      3.在％g 格式代表有效位數的最大值。<br> \
      4.在％s格式代表字串的最大長度。<br> \
      5.若為×符號則代表下個參數值為最大長度。<br> \
      width為參數的最小長度，若此欄並非數值，而是*符號，則表示以下一個參數當做參數長度。<br> \
      flags 有下列幾種情況<br> \
      #NAME?<br> \
      + 一般在列印負數時，printf（）會加印一個負號，整數則不加任何負號。此旗標會使得在列印正數前多一個正號（+）。<br> \
      # 此旗標會根據其後轉換字元的不同而有不同含義。當在類型為o 之前（如％#o），則會在列印八進位數值前多印一個o。<br> \
      而在類型為x 之前（％#x）則會在列印十六進位數前多印’0x’，在型態為e、E、f、g或G 之前則會強迫數值列印小數點。在類型為g 或G之前時則同時保留小數點及小數位數末尾的零。<br> \
      0 當有指定參數時，無數字的參數將補上0。默認是關閉此旗標，所以一般會列印出空白字元。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回實際輸出的字元數，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      int i = 150;<br> \
      int j = -100;<br> \
      double k = 3.14159;<br> \
      printf(“%d %f %x\n”,j,k,i);<br> \
      printf(“%2d %*d\n”,i,2,i); /*參數2 會代入格式*中，而與%2d同意義*/<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> -100 3.14159 96<br> \
      150 150<br> \
      </font> </td> \
  </tr> \
',
'sacnf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sacnf（格式化字串輸入） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fscanf，snprintf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int scanf(const char * format,.......);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> scanf()會將輸入的資料根據參數format字串來轉換並格式化資料。Scanf()格式轉換的一般形式如下<br> \
      ％[*][size][l][h]type<br> \
      以中括弧括起來的參數為選擇性參數，而％與type則是必要的。<br> \
      * 代表該對應的參數資料忽略不保存。<br> \
      size 為允許參數輸入的資料長度。<br> \
      l 輸入的資料數值以long int 或double型保存。<br> \
      h 輸入的資料數值以short int 型保存。<br> \
      底下介紹type的幾種形式<br> \
      ％d 輸入的資料會被轉成一有符號的十進位數字字（int）。<br> \
      ％i 輸入的資料會被轉成一有符號的十進位數字字，若輸入資料以“0x”或“0X”開頭代表轉換十六進位數位，若以“0”開頭則轉換八進位數字，其他情況代表十進位。<br> \
      ％0 輸入的資料會被轉換成一無符號的八進位數字。<br> \
      ％u 輸入的資料會被轉換成一無符號的正整數。<br> \
      ％x 輸入的資料為無符號的十六進位數位，轉換後存於unsigned int型變數。<br> \
      ％X 同％x<br> \
      ％f 輸入的資料為有符號的浮點型數，轉換後存於float型變數。<br> \
      ％e 同％f<br> \
      ％E 同％f<br> \
      ％g 同％f<br> \
      ％s 輸入資料為以空格字元為終止的字串。<br> \
      ％c 輸入資料為單一字元。<br> \
      [] 讀取資料但只允許括弧內的字元。如[a-z]。<br> \
      [^] 讀取資料但不允許中括弧的^符號後的字元出現，如[^0-9].<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回參數數目，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include &lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      int i;<br> \
      unsigned int j;<br> \
      char s[5];<br> \
      scanf(“%d %x %5[a-z] %*s %f”,&i,&j,s,s);<br> \
      printf(“%d %d %s\n”,i,j,s);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 10 0x1b aaaaaaaaaa bbbbbbbbbb<br> \
      10 27 aaaaa<br> \
      </font> </td> \
  </tr> \
',
'sprintf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sprintf（格式化字串複製） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> printf，sprintf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sprintf( char *str,const char * format,.........);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sprintf()會根據參數format字串來轉換並格式化資料，然後將結果複製到參數str所指的字串陣列，直到出現字串結束(’\0’)為止。關於參數format字串的格式請參考printf()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回參數str字串長度，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 使用此函數得留意堆疊溢位，或改用snprintf（）。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      char * a=”This is string A!”;<br> \
      char buf[80];<br> \
      sprintf(buf,”&gt;&gt;&gt; %s&lt;&lt;&lt;\n”,a);<br> \
      printf(“%s”.buf);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> &gt;&gt;&gt;This is string A!&lt;&lt;&lt;<br> \
      </font> </td> \
  </tr> \
',
'sscanf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sscanf（格式化字串輸入） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> scanf，fscanf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sscanf (const char *str,const char * format,........);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sscanf()會將參數str的字串根據參數format字串來轉換並格式化資料。格式轉換形式請參考scanf()。轉換後的結果存於對應的參數內。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回參數數目，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      int i;<br> \
      unsigned int j;<br> \
      char input[ ]=”10 0x1b aaaaaaaa bbbbbbbb”;<br> \
      char s[5];<br> \
      sscanf(input,”%d %x %5[a-z] %*s %f”,&i,&j,s,s);<br> \
      printf(“%d %d %s\n”,i,j,s);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 10 27 aaaaa<br> \
      </font> </td> \
  </tr> \
',
'vfprintf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      vfprintf（格式化輸出資料至檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> printf，fscanf，fprintf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #include&lt;stdarg.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int vfprintf(FILE *stream,const char * format,va_list  \
      ap);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vfprintf()會根據參數format字串來轉換並格式化資料，然後將結果輸出到參數stream指定的檔中，直到出現字串結束(’\0’)為止。關於參數format字串的格式請參考printf()。va_list用法請參考附錄C或vprintf()範例。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回實際輸出的字元數，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考fprintf()及vprintf()。<br> \
      </font> </td> \
  </tr> \
',
'vfscanf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      vfscanf（格式化字串輸入） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> scanf，sscanf，fscanf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int vfscanf(FILE * stream,const char * format  \
      ,va_list ap);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vfscanf()會自參數stream 的檔流中讀取字串，再根據參數format字串來轉換並格式化資料。格式轉換形式請參考scanf()。轉換後的結果存於對應的參數內。va_list用法請參考附錄C  \
      或vprintf()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回參數數目，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考fscanf()及vprintf()。<br> \
      </font> </td> \
  </tr> \
',
'vprintf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      vprintf（格式化輸出資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> printf，vfprintf，vsprintf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #include&lt;stdarg.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int vprintf(const char * format,va_list ap);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vprintf()作用和printf()相同，參數format格式也相同。va_list為不定個數的參數列，用法及範例請參考附錄C。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回實際輸出的字元數，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #include&lt;stdarg.h&gt;<br> \
      int my_printf( const char *format,……)<br> \
      {<br> \
      va_list ap;<br> \
      int retval;<br> \
      va_start(ap,format);<br> \
      printf(“my_printf( ):”);<br> \
      retval = vprintf(format,ap);<br> \
      va_end(ap);<br> \
      return retval;<br> \
      }<br> \
      main()<br> \
      {<br> \
      int i = 150,j = -100;<br> \
      double k = 3.14159;<br> \
      my_printf(“%d %f %x\n”,j,k,i);<br> \
      my_printf(“%2d %*d\n”,i,2,i);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> my_printf() : -100 3.14159 96<br> \
      my_printf() : 150 150<br> \
      </font> </td> \
  </tr> \
',
'vscanf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      vscanf（格式化字串輸入） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vsscanf，vfscanf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #include&lt;stdarg.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int vscanf( const char * format,va_list ap);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vscanf()會將輸入的資料根據參數format字串來轉換並格式化資料。格式轉換形式請參考scanf()。轉換後的結果存於對應的參數內。va_list用法請參考附錄C或vprintf()範例。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回參數數目，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考scanf()及vprintf()。<br> \
      </font> </td> \
  </tr> \
',
'vsprintf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      vsprintf（格式化字串複製） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vnsprintf，vprintf，snprintf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int vsprintf( char * str,const char * format,va_list  \
      ap);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vsprintf()會根據參數format字串來轉換並格式化資料，然後將結果複製到參數str所指的字串陣列，直到出現字串結束(’\0’)為止。關於參數format字串的格式請參考printf()。va_list用法請參考附錄C或vprintf()範例。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回參數str字串長度，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考vprintf()及vsprintf()。<br> \
      </font> </td> \
  </tr> \
',
'vsscanf_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      vsscanf（格式化字串輸入） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vscanf，vfscanf<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int vsscanf(const char * str,const char * format,va_list  \
      ap);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> vsscanf()會將參數str的字串根據參數format字串來轉換並格式化資料。格式轉換形式請參考附錄C  \
      或vprintf()範例。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回參數數目，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 請參考sscanf()及vprintf()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'access_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      access（判斷是否具有存取檔的許可權） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> stat，open，chmod，chown，setuid，setgid<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int access(const char * pathname,int mode);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> access()會檢查是否可以讀/寫某一已存在的檔。參數mode有幾種情況組合，R_OK，W_OK，X_OK  \
      和F_OK。R_OK，W_OK與X_OK用來檢查檔是否具有讀取、寫入和執行的許可權。F_OK則是用來判斷該檔是否存在。由於access()只作許可權的核查，並不理會檔形態或檔內容，因此，如果一目錄表示為“可寫入”，表示可以在該目錄中建立新檔等操作，而非意味此目錄可以被當做檔處理。例如，你會發現DOS的檔都具有“可執行”許可權，但用execve()執行時則會失敗。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若所有欲查核的許可權都通過了檢查則返回0值，表示成功，只要有一許可權被禁止則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EACCESS 參數pathname 所指定的檔不符合所要求測試的許可權。<br> \
      EROFS 欲測試寫入許可權的檔存在於唯讀檔案系統內。<br> \
      EFAULT 參數pathname指標超出可存取記憶體空間。<br> \
      EINVAL 參數mode 不正確。<br> \
      ENAMETOOLONG 參數pathname太長。<br> \
      ENOTDIR 參數pathname為一目錄。<br> \
      ENOMEM 核心記憶體不足<br> \
      ELOOP 參數pathname有過多符號連接問題。<br> \
      EIO I/O 存取錯誤。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 使用access()作用戶認證方面的判斷要特別小心，例如在access()後再做open()的空檔可能會造成系統安全上的問題。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 判斷是否允許讀取/etc/passwd */<br> \
      #include&lt;unistd.h&gt;<br> \
      int main()<br> \
      {<br> \
      if (access(“/etc/passwd”,R_OK) = =0)<br> \
      printf(“/etc/passwd can be read\n”);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /etc/passwd can be read<br> \
      </font> </td> \
  </tr> \
',
'alphasort_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      alphasort（依字母順序排序目錄結構） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> scandir，qsort<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;dirent.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int alphasort(const struct dirent **a,const  \
      struct dirent **b);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> alphasort()為scandir()最後調用qsort()函數時傳給qsort()作為判斷的函數，詳細說明請參考scandir()及qsort()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考qsort()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 讀取/目錄下所有的目錄結構，並依字母順序排列*/<br> \
      main()<br> \
      {<br> \
      struct dirent **namelist;<br> \
      int i,total;<br> \
      total = scandir(“/”,&namelist ,0,alphasort);<br> \
      if(total &lt;0)<br> \
      perror(“scandir”);<br> \
      else{<br> \
      for(i=0;i&lt;total;i++)<br> \
      printf(“%s\n”,namelist[i]-&gt;d_name);<br> \
      printf(“total = %d\n”,total);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ..<br> \
      .gnome<br> \
      .gnome_private<br> \
      ErrorLog<br> \
      Weblog<br> \
      bin<br> \
      boot<br> \
      dev<br> \
      dosc<br> \
      dosd<br> \
      etc<br> \
      home<br> \
      lib<br> \
      lost+found<br> \
      misc<br> \
      mnt<br> \
      opt<br> \
      proc<br> \
      root<br> \
      sbin<br> \
      tmp<br> \
      usr<br> \
      var<br> \
      total = 24<br> \
      </font> </td> \
  </tr> \
',
'chdir_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      chdir（改變當前的工作（目錄） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getcwd，chroot<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int chdir(const char * path);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> chdir()用來將當前的工作目錄改變成以參數path所指的目錄。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗返回-1，errno為錯誤代碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      chdir(“/tmp”);<br> \
      printf(“current working directory: %s\n”,getcwd(NULL,NULL));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> current working directory :/tmp<br> \
      </font> </td> \
  </tr> \
',
'chmod_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      chmod（改變檔的許可權） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fchmod，stat，open，chown<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int chmod(const char * path,mode_t mode);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> chmod()會依參數mode 許可權來更改參數path 指定文件的許可權。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> mode 有下列數種組合<br> \
      S_ISUID 04000 文件的（set user-id on execution）位<br> \
      S_ISGID 02000 文件的（set group-id on execution）位<br> \
      S_ISVTX 01000 文件的sticky位<br> \
      S_IRUSR（S_IREAD） 00400 文件所有者具可讀取許可權<br> \
      S_IWUSR（S_IWRITE）00200 文件所有者具可寫入許可權<br> \
      S_IXUSR（S_IEXEC） 00100 檔所有者具可執行許可權<br> \
      S_IRGRP 00040 用戶組具可讀取許可權<br> \
      S_IWGRP 00020 用戶組具可寫入許可權<br> \
      S_IXGRP 00010 用戶組具可執行許可權<br> \
      S_IROTH 00004 其他用戶具可讀取許可權<br> \
      S_IWOTH 00002 其他用戶具可寫入許可權<br> \
      S_IXOTH 00001 其他用戶具可執行許可權<br> \
      只有該檔的所有者或有效用戶識別碼為0，才可以修改該檔許可權。基於系統安全，如果欲將資料寫入一執行檔，而該執行檔具有S_ISUID 或S_ISGID  \
      許可權，則這兩個位會被清除。如果一目錄具有S_ISUID 位元許可權，表示在此目錄下只有該檔的所有者或root可以刪除該檔。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 許可權改變成功返回0，失敗返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EPERM 進程的有效使用者識別碼與欲修改許可權的檔擁有者不同，而且也不具root許可權。<br> \
      EACCESS 參數path所指定的檔無法存取。<br> \
      EROFS 欲寫入許可權的檔存在於唯讀檔案系統內。<br> \
      EFAULT 參數path指標超出可存取記憶體空間。<br> \
      EINVAL 參數mode不正確<br> \
      ENAMETOOLONG 參數path太長<br> \
      ENOENT 指定的文件不存在<br> \
      ENOTDIR 參數path路徑並非一目錄<br> \
      ENOMEM 核心記憶體不足<br> \
      ELOOP 參數path有過多符號連接問題。<br> \
      EIO I/O 存取錯誤<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 將/etc/passwd 文件許可權設成S_IRUSR|S_IWUSR|S_IRGRP|S_IROTH  \
      */<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      main()<br> \
      {<br> \
      chmod(“/etc/passwd”,S_IRUSR|S_IWUSR|S_IRGRP|S_IROTH);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'chown_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      chown（改變檔的所有者） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fchown，lchown，chmod<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int chown(const char * path, uid_t owner,gid_t  \
      group);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> chown()會將參數path指定檔的所有者變更為參數owner代表的用戶，而將該檔的組變更為參數group組。如果參數owner或group為-1，對應的所有者或組不會有所改變。root與檔所有者皆可改變檔組，但所有者必須是參數group組的成員。當root用chown()改變檔所有者或組時，該檔若具有S_ISUID或S_ISGID許可權，則會清除此許可權位，此外如果具有S_ISGID許可權但不具S_IXGRP位，則該檔會被強制鎖定，檔模式會保留。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考chmod（）。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 將/etc/passwd 的所有者和組都設為root */<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      chown(“/etc/passwd”,0,0);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'chroot_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      chroot（改變根目錄） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> chdir<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int chroot(const char * path);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> chroot()用來改變根目錄為參數path 所指定的目錄。只有超級使用者才允許改變根目錄，子進程將繼承新的根目錄。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 調用成功則返回0，失敗則返-1，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EPERM 許可權不足，無法改變根目錄。<br> \
      EFAULT 參數path指標超出可存取記憶體空間。<br> \
      ENAMETOOLONG 參數path太長。<br> \
      ENOTDIR 路徑中的目錄存在但卻非真正的目錄。<br> \
      EACCESS 存取目錄時被拒絕<br> \
      ENOMEM 核心記憶體不足。<br> \
      ELOOP 參數path有過多符號連接問題。<br> \
      EIO I/O 存取錯誤。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 將根目錄改為/tmp ,並將工作目錄切換至/tmp */<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      chroot(“/tmp”);<br> \
      chdir(“/”);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'closedir_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      closedir（關閉目錄） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> opendir<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;dirent.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int closedir(DIR *dir);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> closedir()關閉參數dir所指的目錄流。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 關閉成功則返回0，失敗返回-1，錯誤原因存於errno 中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數dir為無效的目錄流<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考readir()。<br> \
      </font> </td> \
  </tr> \
',
'fchdir_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fchdir（改變當前的工作目錄） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getcwd，chroot<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fchdir(int fd);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fchdir()用來將當前的工作目錄改變成以參數fd 所指的文件描述詞。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值執 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 行成功則返回0，失敗返回-1，errno為錯誤代碼。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      int fd;<br> \
      fd = open(“/tmp”,O_RDONLY);<br> \
      fchdir(fd);<br> \
      printf(“current working directory : %s \n”,getcwd(NULL,NULL));<br> \
      close(fd);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> current working directory : /tmp<br> \
      </font> </td> \
  </tr> \
',
'fchmod_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fchmod（改變檔的許可權） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> chmod，stat，open，chown<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fchmod(int fildes,mode_t mode);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fchmod()會依參數mode許可權來更改參數fildes所指文件的許可權。參數fildes為已打開文件的文件描述詞。參數mode請參考chmod（）。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 許可權改變成功則返回0，失敗返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤原因 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數fildes為無效的檔描述詞。<br> \
      EPERM 進程的有效使用者識別碼與欲修改許可權的檔所有者不同，而且也不具root許可權。<br> \
      EROFS 欲寫入許可權的檔存在於唯讀檔案系統內。<br> \
      EIO I/O 存取錯誤。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      main()<br> \
      {<br> \
      int fd;<br> \
      fd = open (“/etc/passwd”,O_RDONLY);<br> \
      fchmod(fd,S_IRUSR|S_IWUSR|S_IRGRP|S_IROTH);<br> \
      close(fd);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'fchown_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fchown（改變檔的所有者） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> chown，lchown，chmod<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fchown(int fd,uid_t owner,gid_t group);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fchown()會將參數fd指定檔的所有者變更為參數owner代表的用戶，而將該檔的組變更為參數group組。如果參數owner或group為-1，對映的所有者或組有所改變。參數fd  \
      為已打開的文件描述詞。當root用fchown()改變檔所有者或組時，該檔若具S_ISUID或S_ISGID許可權，則會清除此許可權位。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗則返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數fd檔描述詞為無效的或該檔已關閉。<br> \
      EPERM 進程的有效使用者識別碼與欲修改許可權的檔所有者不同，而且也不具root許可權，或是參數owner、group不正確。<br> \
      EROFS 欲寫入的檔存在於唯讀檔案系統內。<br> \
      ENOENT 指定的文件不存在<br> \
      EIO I/O存取錯誤<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      main()<br> \
      {<br> \
      int fd;<br> \
      fd = open (“/etc/passwd”,O_RDONLY);<br> \
      chown(fd,0,0);<br> \
      close(fd);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'fstat_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      fstat（由檔描述詞取得檔狀態） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> stat，lstat，chmod，chown，readlink，utime<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/stat.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int fstat(int fildes,struct stat *buf);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fstat()用來將參數fildes所指的檔狀態，複製到參數buf所指的結構中(struct  \
      stat)。Fstat()與stat()作用完全相同，不同處在於傳入的參數為已打開的文件描述詞。詳細內容請參考stat()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗返回-1，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/stat.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      #include&lt;fcntk.h&gt;<br> \
      main()<br> \
      {<br> \
      struct stat buf;<br> \
      int fd;<br> \
      fd = open (“/etc/passwd”,O_RDONLY);<br> \
      fstat(fd,&buf);<br> \
      printf(“/etc/passwd file size +%d\n “,buf.st_size);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /etc/passwd file size = 705<br> \
      </font> </td> \
  </tr> \
',
'ftruncate_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      ftruncate（改變檔大小） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，truncate<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int ftruncate(int fd,off_t length);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ftruncate()會將參數fd指定的檔大小改為參數length指定的大小。參數fd為已打開的檔描述詞，而且必須是以寫入模式打開的檔。如果原來的檔大小比參數length大，則超過的部分會被刪去。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數fd檔描述詞為無效的或該檔已關閉。<br> \
      EINVAL 參數fd 為一socket 並非文件，或是該檔並非以寫入模式打開。<br> \
      </font> </td> \
  </tr> \
',
'getcwd_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getcwd（取得當前的工作目錄） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> get_current_dir_name，getwd，chdir<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> char * getcwd(char * buf,size_t size);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getcwd()會將當前的工作目錄絕對路徑複製到參數buf所指的記憶體空間，參數size為buf的空間大小。在調用此函數時，buf所指的記憶體空間要足夠大，若工作目錄絕對路徑的字串長度超過參數size大小，則回值NULL，errno的值則為ERANGE。倘若參數buf為NULL，getcwd()會依參數size的大小自動配置記憶體(使用malloc())，如果參數size也為0，則getcwd()會依工作目錄絕對路徑的字串程度來決定所配置的記憶體大小，進程可以在使用完此字串後利用free()來釋放此空間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則將結果複製到參數buf所指的記憶體空間，或是返回自動配置的字串指標。失敗返回NULL，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      char buf[80];<br> \
      getcwd(buf,sizeof(buf));<br> \
      printf(“current working directory : %s\n”,buf);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> current working directory :/tmp<br> \
      </font> </td> \
  </tr> \
',
'link_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      link（建立文件連接） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> symlink，unlink<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int link (const char * oldpath,const char *  \
      newpath);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> link()以參數newpath指定的名稱來建立一個新的連接(硬連接)到參數oldpath所指定的已存在檔。如果參數newpath指定的名稱為一已存在的檔則不會建立連接。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> link()所建立的硬連接無法跨越不同檔案系統，如果需要請改用symlink()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EXDEV 參數oldpath與newpath不是建立在同一檔案系統。<br> \
      EPERM 參數oldpath與newpath所指的檔案系統不支援硬連接<br> \
      EROFS 檔存在於唯讀檔案系統內<br> \
      EFAULT 參數oldpath或newpath 指標超出可存取記憶體空間。<br> \
      ENAMETOLLONG 參數oldpath或newpath太長<br> \
      ENOMEM 核心記憶體不足<br> \
      EEXIST 參數newpath所指的檔案名已存在。<br> \
      EMLINK 參數oldpath所指的檔已達最大連接數目。<br> \
      ELOOP 參數pathname有過多符號連接問題<br> \
      ENOSPC 檔案系統的剩餘空間不足。<br> \
      EIO I/O 存取錯誤。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 建立/etc/passwd 的硬連接為pass */<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      link(“/etc/passwd”,”pass”);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'lstat_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      lstat（由檔描述詞取得檔狀態） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> stat，fstat，chmod，chown，readlink，utime<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/stat.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int lstat (const char * file_name.struct stat  \
      * buf);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> lstat()與stat()作用完全相同，都是取得參數file_name所指的檔狀態，其差別在於，當檔為符號連接時，lstat()會返回該link本身的狀態。詳細內容請參考stat()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗返回-1，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考stat()。<br> \
      </font> </td> \
  </tr> \
',
'opendir_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      opendir（打開目錄） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，readdir，closedir，rewinddir，seekdir，telldir，scandir<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;dirent.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> DIR * opendir(const char * name);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> opendir()用來打開參數name指定的目錄，並返回DIR*形態的目錄流，和open()類似，接下來對目錄的讀取和搜索都要使用此返回值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回DIR* 型態的目錄流，打開失敗則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EACCESS 許可權不足<br> \
      EMFILE 已達到進程可同時打開的檔數上限。<br> \
      ENFILE 已達到系統可同時打開的檔數上限。<br> \
      ENOTDIR 參數name非真正的目錄<br> \
      ENOENT 參數name 指定的目錄不存在，或是參數name 為一空字串。<br> \
      ENOMEM 核心記憶體不足。<br> \
      </font> </td> \
  </tr> \
',
'readdir_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      readdir（讀取目錄） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，opendir，closedir，rewinddir，seekdir，telldir，scandir<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;dirent.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> struct dirent * readdir(DIR * dir);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> readdir()返回參數dir目錄流的下個目錄進入點。<br> \
      結構dirent定義如下<br> \
      struct dirent<br> \
      {<br> \
      ino_t d_ino;<br> \
      ff_t d_off;<br> \
      signed short int d_reclen;<br> \
      unsigned char d_type;<br> \
      har d_name[256;<br> \
      };<br> \
      d_ino 此目錄進入點的inode<br> \
      d_off 目錄檔開頭至此目錄進入點的位移<br> \
      d_reclen _name的長度，不包含NULL字元<br> \
      d_type d_name 所指的檔案類型<br> \
      d_name 檔案名<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回下個目錄進入點。有錯誤發生或讀取到目錄檔案結尾則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF參數dir為無效的目錄流。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;dirent.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      DIR * dir;<br> \
      struct dirent * ptr;<br> \
      int i;<br> \
      dir =opendir(“/etc/rc.d”);<br> \
      while((ptr = readdir(dir))!=NULL)<br> \
      {<br> \
      printf(“d_name: %s\n”,ptr-&gt;d_name);<br> \
      }<br> \
      closedir(dir);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> d_name:.<br> \
      d_name:..<br> \
      d_name:init.d<br> \
      d_name:rc0.d<br> \
      d_name:rc1.d<br> \
      d_name:rc2.d<br> \
      d_name:rc3.d<br> \
      d_name:rc4.d<br> \
      d_name:rc5.d<br> \
      d_name:rc6.d<br> \
      d_name:rc<br> \
      d_name:rc.local<br> \
      d_name:rc.sysinit<br> \
      </font> </td> \
  </tr> \
',
'readlink_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      readlink（取得符號連接所指的檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> stat，lstat，symlink<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int readlink(const char * path ,char * buf,size_t  \
      bufsiz);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> readlink()會將參數path的符號連接內容存到參數buf所指的記憶體空間，返回的內容不是以NULL作字串結尾，但會將字串的字元數返回。若參數bufsiz小於符號連接的內容長度，過長的內容會被截斷。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則傳符號連接所指的檔路徑字串，失敗則返回-1，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EACCESS 取檔時被拒絕，許可權不夠<br> \
      EINVAL 參數bufsiz 為負數<br> \
      EIO I/O 存取錯誤。<br> \
      ELOOP 欲打開的檔有過多符號連接問題。<br> \
      ENAMETOOLONG 參數path的路徑名稱太長<br> \
      ENOENT 參數path所指定的文件不存在<br> \
      ENOMEM 核心記憶體不足<br> \
      ENOTDIR 參數path路徑中的目錄存在但卻非真正的目錄。<br> \
      </font> </td> \
  </tr> \
',
'remove_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      remove（刪除檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> link，rename，unlink<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int remove(const char * pathname);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> remove()會刪除參數pathname指定的檔。如果參數pathname為一檔，則調用unlink()處理，若參數pathname為一目錄，則調用rmdir()來處理。請參考unlink()與rmdir()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗則返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EROFS 欲寫入的檔存在於唯讀檔案系統內<br> \
      EFAULT 參數pathname指標超出可存取記憶體空間<br> \
      ENAMETOOLONG 參數pathname太長<br> \
      ENOMEM 核心記憶體不足<br> \
      ELOOP 參數pathname有過多符號連接問題<br> \
      EIO I/O 存取錯誤。<br> \
      </font> </td> \
  </tr> \
',
'rename_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      rename（更改檔案名稱或位置） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> link，unlink，symlink<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int rename(const char * oldpath,const char  \
      * newpath);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> rename()會將參數oldpath 所指定的檔案名稱改為參數newpath所指的檔案名稱。若newpath所指定的檔已存在，則會被刪除。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗返回-1，錯誤原因存於errno<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 設計一個DOS下的rename指令rename 舊檔案名新檔案名*/<br> \
      #include &lt;stdio.h&gt;<br> \
      void main(int argc,char **argv)<br> \
      {<br> \
      if(argc&lt;3){<br> \
      printf(“Usage: %s old_name new_name\n”,argv[0]);<br> \
      return;<br> \
      }<br> \
      printf(“%s=&gt;%s”,argc[1],argv[2]);<br> \
      if(rename(argv[1],argv[2]&lt;0)<br> \
      printf(“error!\n”);<br> \
      else<br> \
      printf(“ok!\n”);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'rewinddir_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      rewinddir（重設讀取目錄的位置為開頭位置） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，opendir，closedir，telldir，seekdir，readdir，scandir<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;dirent.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void rewinddir(DIR *dir);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> rewinddir()用來設置參數dir 目錄流目前的讀取位置為原來開頭的讀取位置。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF dir為無效的目錄流<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;dirent.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      DIR * dir;<br> \
      struct dirent *ptr;<br> \
      dir = opendir(“/etc/rc.d”);<br> \
      while((ptr = readdir(dir))!=NULL)<br> \
      {<br> \
      printf(“d_name :%s\n”,ptr-&gt;d_name);<br> \
      }<br> \
      rewinddir(dir);<br> \
      printf(“readdir again!\n”);<br> \
      while((ptr = readdir(dir))!=NULL)<br> \
      {<br> \
      printf(“d_name: %s\n”,ptr-&gt;d_name);<br> \
      }<br> \
      closedir(dir);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> d_name:.<br> \
      d_name:..<br> \
      d_name:init.d<br> \
      d_name:rc0.d<br> \
      d_name:rc1.d<br> \
      d_name:rc2.d<br> \
      d_name:rc3.d<br> \
      d_name:rc4.d<br> \
      d_name:rc5.d<br> \
      d_name:rc6.d<br> \
      d_name:rc<br> \
      d_name:rc.local<br> \
      d_name:rc.sysinit<br> \
      readdir again!<br> \
      d_name:.<br> \
      d_name:..<br> \
      d_name:init.d<br> \
      d_name:rc0.d<br> \
      d_name:rc1.d<br> \
      d_name:rc2.d<br> \
      d_name:rc3.d<br> \
      d_name:rc4.d<br> \
      d_name:rc5.d<br> \
      d_name:rc6.d<br> \
      d_name:rc<br> \
      d_name:rc.local<br> \
      d_name:rc.sysinit<br> \
      </font> </td> \
  </tr> \
',
'seekdir_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      seekdir（設置下回讀取目錄的位置） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，opendir，closedir，rewinddir，telldir，readdir，scandir<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;dirent.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void seekdir(DIR * dir,off_t offset);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> seekdir()用來設置參數dir目錄流目前的讀取位置，在調用readdir()時便從此新位置開始讀取。參數offset  \
      代表距離目錄檔開頭的偏移量。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF 參數dir為無效的目錄流<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;dirent.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      DIR * dir;<br> \
      struct dirent * ptr;<br> \
      int offset,offset_5,i=0;<br> \
      dir=opendir(“/etc/rc.d”);<br> \
      while((ptr = readdir(dir))!=NULL)<br> \
      {<br> \
      offset = telldir(dir);<br> \
      if(++i = =5) offset_5 =offset;<br> \
      printf(“d_name :%s offset :%d \n”,ptr-&gt;d_name,offset);<br> \
      }<br> \
      seekdir(dir offset_5);<br> \
      printf(“Readdir again!\n”);<br> \
      while((ptr = readdir(dir))!=NULL)<br> \
      {<br> \
      offset = telldir(dir);<br> \
      printf(“d_name :%s offset :%d\n”,ptr-&gt;d_name.offset);<br> \
      }<br> \
      closedir(dir);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> d_name : . offset :12<br> \
      d_name : .. offset:24<br> \
      d_name : init.d offset 40<br> \
      d_name : rc0.d offset :56<br> \
      d_name :rc1.d offset :72<br> \
      d_name:rc2.d offset :88<br> \
      d_name:rc3.d offset 104<br> \
      d_name:rc4.d offset:120<br> \
      d_name:rc5.d offset:136<br> \
      d_name:rc6.d offset:152<br> \
      d_name:rc offset 164<br> \
      d_name:rc.local offset :180<br> \
      d_name:rc.sysinit offset :4096<br> \
      readdir again!<br> \
      d_name:rc2.d offset :88<br> \
      d_name:rc3.d offset 104<br> \
      d_name:rc4.d offset:120<br> \
      d_name:rc5.d offset:136<br> \
      d_name:rc6.d offset:152<br> \
      d_name:rc offset 164<br> \
      d_name:rc.local offset :180<br> \
      d_name:rc.sysinit offset :4096<br> \
      </font> </td> \
  </tr> \
',
'stat_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      stat（取得檔狀態） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> fstat，lstat，chmod，chown，readlink，utime<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/stat.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int stat(const char * file_name,struct stat  \
      *buf);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> stat()用來將參數file_name所指的檔狀態，複製到參數buf所指的結構中。<br> \
      下面是struct stat內各參數的說明<br> \
      struct stat<br> \
      {<br> \
      dev_t st_dev; /*device*/<br> \
      ino_t st_ino; /*inode*/<br> \
      mode_t st_mode; /*protection*/<br> \
      nlink_t st_nlink; /*number of hard links */<br> \
      uid_t st_uid; /*user ID of owner*/<br> \
      gid_t st_gid; /*group ID of owner*/<br> \
      dev_t st_rdev; /*device type */<br> \
      off_t st_size; /*total size, in bytes*/<br> \
      unsigned long st_blksize; /*blocksize for filesystem I/O */<br> \
      unsigned long st_blocks; /*number of blocks allocated*/<br> \
      time_t st_atime; /* time of lastaccess*/<br> \
      time_t st_mtime; /* time of last modification */<br> \
      time_t st_ctime; /* time of last change */<br> \
      };<br> \
      st_dev 檔的設備編號<br> \
      st_ino 文件的i-node<br> \
      st_mode 文件的類型和存取的許可權<br> \
      st_nlink 連到該檔的硬連接數目，剛建立的檔值為1。<br> \
      st_uid 檔所有者的用戶識別碼<br> \
      st_gid 文件所有者的組識別碼<br> \
      st_rdev 若此檔為裝置設備檔，則為其設備編號<br> \
      st_size 檔大小，以位元組計算<br> \
      st_blksize 檔案系統的I/O 緩衝區大小。<br> \
      st_blcoks 佔用文件區塊的個數，每一區塊大小為512 個位元組。<br> \
      st_atime 檔最近一次被存取或被執行的時間，一般只有在用mknod、utime、read、write與tructate時改變。<br> \
      st_mtime 檔最後一次被修改的時間，一般只有在用mknod、utime和write時才會改變<br> \
      st_ctime i-node最近一次被更改的時間，此參數會在檔所有者、組、許可權被更改時更新先前所描述的st_mode 則定義了下列數種情況<br> \
      S_IFMT 0170000 檔案類型的位遮罩<br> \
      S_IFSOCK 0140000 scoket<br> \
      S_IFLNK 0120000 符號連接<br> \
      S_IFREG 0100000 一般檔<br> \
      S_IFBLK 0060000 區塊裝置<br> \
      S_IFDIR 0040000 目錄<br> \
      S_IFCHR 0020000 字元裝置<br> \
      S_IFIFO 0010000 先進先出<br> \
      S_ISUID 04000 文件的（set user-id on execution）位<br> \
      S_ISGID 02000 文件的（set group-id on execution）位<br> \
      S_ISVTX 01000 文件的sticky位<br> \
      S_IRUSR（S_IREAD） 00400 文件所有者具可讀取許可權<br> \
      S_IWUSR（S_IWRITE）00200 文件所有者具可寫入許可權<br> \
      S_IXUSR（S_IEXEC） 00100 檔所有者具可執行許可權<br> \
      S_IRGRP 00040 用戶組具可讀取許可權<br> \
      S_IWGRP 00020 用戶組具可寫入許可權<br> \
      S_IXGRP 00010 用戶組具可執行許可權<br> \
      S_IROTH 00004 其他用戶具可讀取許可權<br> \
      S_IWOTH 00002 其他用戶具可寫入許可權<br> \
      S_IXOTH 00001 其他用戶具可執行許可權<br> \
      上述的檔案類型在POSIX 中定義了檢查這些類型的巨集定義<br> \
      S_ISLNK （st_mode） 判斷是否為符號連接<br> \
      S_ISREG （st_mode） 是否為一般檔<br> \
      S_ISDIR （st_mode）是否為目錄<br> \
      S_ISCHR （st_mode）是否為字元裝置檔<br> \
      S_ISBLK （s3e） 是否為先進先出<br> \
      S_ISSOCK （st_mode） 是否為socket<br> \
      若一目錄具有sticky 位元（S_ISVTX），則表示在此目錄下的檔只能被該檔所有者、此目錄所有者或root來刪除或改名。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗返回-1，錯誤代碼存於errno<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ENOENT 參數file_name指定的文件不存在<br> \
      ENOTDIR 路徑中的目錄存在但卻非真正的目錄<br> \
      ELOOP 欲打開的檔有過多符號連接問題，上限為16符號連接<br> \
      EFAULT 參數buf為無效指標，指向無法存在的記憶體空間<br> \
      EACCESS 存取檔時被拒絕<br> \
      ENOMEM 核心記憶體不足<br> \
      ENAMETOOLONG 參數file_name的路徑名稱太長<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/stat.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      mian()<br> \
      {<br> \
      struct stat buf;<br> \
      stat (“/etc/passwd”,&buf);<br> \
      printf(“/etc/passwd file size = %d \n”,buf.st_size);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /etc/passwd file size = 705<br> \
      </font> </td> \
  </tr> \
',
'symlink_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      symlink（建立檔符號連接） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> link，unlink<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int symlink( const char * oldpath,const char  \
      * newpath);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> symlink()以參數newpath指定的名稱來建立一個新的連接(符號連接)到參數oldpath所指定的已存在檔。參數oldpath指定的檔不一定要存在，如果參數newpath指定的名稱為一已存在的檔則不會建立連接。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EPERM 參數oldpath與newpath所指的檔案系統不支援符號連接<br> \
      EROFS 欲測試寫入許可權的檔存在於唯讀檔案系統內<br> \
      EFAULT 參數oldpath或newpath指標超出可存取記憶體空間。<br> \
      ENAMETOOLONG 參數oldpath或newpath太長<br> \
      ENOMEM 核心記憶體不足<br> \
      EEXIST 參數newpath所指的檔案名已存在。<br> \
      EMLINK 參數oldpath所指的檔已達到最大連接數目<br> \
      ELOOP 參數pathname有過多符號連接問題<br> \
      ENOSPC 檔案系統的剩餘空間不足<br> \
      EIO I/O 存取錯誤<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      symlink(“/etc/passwd”,”pass”);<br> \
      }<br> \
      </font> </td> \
  </tr> \
',
'telldir_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      telldir（取得目錄流的讀取位置） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，opendir，closedir，rewinddir，seekdir，readdir，scandir<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;dirent.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> off_t telldir(DIR *dir);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> telldir()返回參數dir目錄流目前的讀取位置。此返回值代表距離目錄檔開頭的偏移量返回值返回下個讀取位置，有錯誤發生時返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EBADF參數dir為無效的目錄流。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;dirent.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      DIR *dir;<br> \
      struct dirent *ptr;<br> \
      int offset;<br> \
      dir = opendir(“/etc/rc.d”);<br> \
      while((ptr = readdir(dir))!=NULL)<br> \
      {<br> \
      offset = telldir (dir);<br> \
      printf(“d_name : %s offset :%d\n”, ptr-&gt;d_name,offset);<br> \
      }<br> \
      closedir(dir);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> d_name : . offset :12<br> \
      d_name : .. offset:24<br> \
      d_name : init.d offset 40<br> \
      d_name : rc0.d offset :56<br> \
      d_name :rc1.d offset :72<br> \
      d_name:rc2.d offset :88<br> \
      d_name:rc3.d offset 104<br> \
      d_name:rc4.d offset:120<br> \
      d_name:rc5.d offset:136<br> \
      d_name:rc6.d offset:152<br> \
      d_name:rc offset 164<br> \
      d_name:rc.local offset :180<br> \
      d_name:rc.sysinit offset :4096<br> \
      </font> </td> \
  </tr> \
',
'truncate_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      truncate（改變檔大小） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> open，ftruncate<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int truncate(const char * path,off_t length);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> truncate()會將參數path 指定的檔大小改為參數length 指定的大小。如果原來的檔大小比參數length大，則超過的部分會被刪去。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，失敗返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EACCESS 參數path所指定的檔無法存取。<br> \
      EROFS 欲寫入的檔存在於唯讀檔案系統內<br> \
      EFAULT 參數path指標超出可存取記憶體空間<br> \
      EINVAL 參數path包含不合法字元<br> \
      ENAMETOOLONG 參數path太長<br> \
      ENOTDIR 參數path路徑並非一目錄<br> \
      EISDIR 參數path 指向一目錄<br> \
      ETXTBUSY 參數path所指的檔為共用程式，而且正被執行中<br> \
      ELOOP 參數path’有過多符號連接問題<br> \
      EIO I/O 存取錯誤。<br> \
      </font> </td> \
  </tr> \
',
'umask_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      umask（設置建立新文件時的許可權遮罩） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> creat，open<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> mode_t umask(mode_t mask);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> umask()會將系統umask值設成參數mask&0777後的值，然後將先前的umask值返回。在使用open()建立新文件時，該參數mode並非真正建立文件的許可權，而是(mode&~umask)的許可權值。例如，在建立文件時指定文件許可權為0666，通常umask值默認為022，則該檔的真正許可權則為0666&～022＝0644，也就是rw-r--r--返回值此調用不會有錯誤值返回。返回值為原先系統的umask值。<br> \
      </font> </td> \
  </tr> \
',
'unlink_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      unlink（刪除檔） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> link，rename，remove<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int unlink(const char * pathname);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> unlink()會刪除參數pathname指定的檔。如果該檔案名為最後連接點，但有其他進程打開了此檔，則在所有關於此檔的檔描述詞皆關閉後才會刪除。如果參數pathname為一符號連接，則此連接會被刪除。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，錯誤原因存於errno<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EROFS 檔存在於唯讀檔案系統內<br> \
      EFAULT 參數pathname指標超出可存取記憶體空間<br> \
      ENAMETOOLONG 參數pathname太長<br> \
      ENOMEM 核心記憶體不足<br> \
      ELOOP 參數pathname 有過多符號連接問題<br> \
      EIO I/O 存取錯誤<br> \
      </font> </td> \
  </tr> \
',
'utime_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      utime（修改檔的存取時間和更改時間） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> utimes，stat<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;utime.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int utime(const char * filename,struct utimbuf  \
      * buf);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> utime()用來修改參數filename檔所屬的inode存取時間。<br> \
      結構utimbuf定義如下<br> \
      struct utimbuf{<br> \
      time_t actime;<br> \
      time_t modtime;<br> \
      };<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果參數buf為空指針(NULL)，則該檔的存取時間和更改時間全部會設為目前時間。<br> \
      執行成功則返回0，失敗返回-1，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EACCESS 存取檔時被拒絕，許可權不足<br> \
      ENOENT 指定的文件不存在。<br> \
      </font> </td> \
  </tr> \
',
'utimes_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      utimes（修改檔的存取時間和更改時間） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> utime，stat<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;utime.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int utimes(char * filename.struct timeval *tvp);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> utimes()用來修改參數filename檔所屬的inode存取時間和修改時間。<br> \
      結構timeval定義如下<br> \
      struct timeval {<br> \
      long tv_sec;<br> \
      long tv_usec; /* 微妙*/<br> \
      };<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參數tvp 指向兩個timeval 結構空間，和utime（）使用的utimebuf結構比較，tvp[0].tc_sec  \
      則為utimbuf.actime，tvp]1].tv_sec 為utimbuf.modtime。<br> \
      執行成功則返回0。失敗返回-1，錯誤代碼存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EACCESS 存取檔時被拒絕，許可權不足<br> \
      ENOENT 指定的文件不存在<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'alarm_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      alarm（設置信號傳送鬧鐘） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> signal，sleep<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> unsigned int alarm(unsigned int seconds);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> alarm()用來設置信號SIGALRM在經過參數seconds指定的秒數後傳送給目前的進程。如果參數seconds  \
      為0，則之前設置的鬧鐘會被取消，並將剩下的時間返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回之前鬧鐘的剩餘秒數，如果之前未設鬧鐘則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      #include&lt;signal.h&gt;<br> \
      void handler() {<br> \
      printf(“hello\n”);<br> \
      }<br> \
      main()<br> \
      {<br> \
      int i;<br> \
      signal(SIGALRM,handler);<br> \
      alarm(5);<br> \
      for(i=1;i&lt;7;i++){<br> \
      printf(“sleep %d ...\n”,i);<br> \
      sleep(1);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sleep 1 ...<br> \
      sleep 2 ...<br> \
      sleep 3 ...<br> \
      sleep 4 ...<br> \
      sleep 5 ...<br> \
      hello<br> \
      sleep 6 ...<br> \
      </font> </td> \
  </tr> \
',
'kill_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      kill（傳送信號給指定的進程） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> raise，signal<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int kill(pid_t pid,int sig);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> kill()可以用來送參數sig指定的信號給參數pid指定的進程。參數pid有幾種情況:<br> \
      pid&gt;0 將信號傳給進程識別碼為pid 的進程。<br> \
      pid=0 將信號傳給和目前進程相同進程組的所有進程<br> \
      pid=-1 將信號廣播傳送給系統內所有的進程<br> \
      pid&lt;0 將信號傳給進程組識別碼為pid絕對值的所有進程<br> \
      參數sig代表的信號編號可參考附錄D<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EINVAL 參數sig 不合法<br> \
      ESRCH 參數pid 所指定的進程或進程組不存在<br> \
      EPERM 許可權不夠無法傳送信號給指定進程<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      #include&lt;signal.h&gt;<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/wait.h&gt;<br> \
      main()<br> \
      {<br> \
      pid_t pid;<br> \
      int status;<br> \
      if(!(pid= fork())){<br> \
      printf(“Hi I am child process!\n”);<br> \
      sleep(10);<br> \
      return;<br> \
      }<br> \
      else{<br> \
      printf(“send signal to child process (%d) \n”,pid);<br> \
      sleep(1);<br> \
      kill(pid ,SIGABRT);<br> \
      wait(&status);<br> \
      if(WIFSIGNALED(status))<br> \
      printf(“chile process receive signal %d\n”,WTERMSIG(status));<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sen signal to child process(3170)<br> \
      Hi I am child process!<br> \
      child process receive signal 6<br> \
      </font> </td> \
  </tr> \
',
'pause_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      pause（讓進程暫停直到信號出現） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> kill，signal，sleep<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int pause(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pause()會令目前的進程暫停（進入睡眠狀態），直到被信號(signal)所中斷。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 只返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EINTR 有信號到達中斷了此函數。<br> \
      </font> </td> \
  </tr> \
',
'sigaction_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sigaction（查詢或設置信號處理方式） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> signal，sigprocmask，sigpending，sigsuspend<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sigaction(int signum,const struct sigaction  \
      *act ,struct sigaction *oldact);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigaction()會依參數signum指定的信號編號來設置該信號的處理函數。參數signum可以指定SIGKILL和SIGSTOP以外的所有信號。<br> \
      如參數結構sigaction定義如下<br> \
      struct sigaction<br> \
      {<br> \
      void (*sa_handler) (int);<br> \
      sigset_t sa_mask;<br> \
      int sa_flags;<br> \
      void (*sa_restorer) (void);<br> \
      }<br> \
      sa_handler此參數和signal()的參數handler相同，代表新的信號處理函數，其他意義請參考signal()。<br> \
      sa_mask 用來設置在處理該信號時暫時將sa_mask 指定的信號擱置。<br> \
      sa_restorer 此參數沒有使用。<br> \
      sa_flags 用來設置信號處理的其他相關操作，下列的數值可用。<br> \
      OR 運算（|）組合<br> \
      A_NOCLDSTOP : 如果參數signum為SIGCHLD，則當子進程暫停時並不會通知父進程<br> \
      SA_ONESHOT/SA_RESETHAND:當調用新的信號處理函數前，將此信號處理方式改為系統預設的方式。<br> \
      SA_RESTART:被信號中斷的系統調用會自行重啟<br> \
      SA_NOMASK/SA_NODEFER:在處理此信號未結束前不理會此信號的再次到來。<br> \
      如果參數oldact不是NULL指標，則原來的信號處理方式會由此結構sigaction 返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EINVAL 參數signum 不合法， 或是企圖攔截SIGKILL/SIGSTOPSIGKILL信號<br> \
      EFAULT 參數act，oldact指針地址無法存取。<br> \
      EINTR 此調用被中斷<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      #include&lt;signal.h&gt;<br> \
      void show_handler(struct sigaction * act)<br> \
      {<br> \
      switch (act-&gt;sa_flags)<br> \
      {<br> \
      case SIG_DFL:printf(“Default action\n”);break;<br> \
      case SIG_IGN:printf(“Ignore the signal\n”);break;<br> \
      default: printf(“0x%x\n”,act-&gt;sa_handler);<br> \
      }<br> \
      }<br> \
      main()<br> \
      {<br> \
      int i;<br> \
      struct sigaction act,oldact;<br> \
      act.sa_handler = show_handler;<br> \
      act.sa_flags = SA_ONESHOT|SA_NOMASK;<br> \
      sigaction(SIGUSR1,&act,&oldact);<br> \
      for(i=5;i&lt;15;i++)<br> \
      {<br> \
      printf(“sa_handler of signal %2d =”.i);<br> \
      sigaction(i,NULL,&oldact);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sa_handler of signal 5 = Default action<br> \
      sa_handler of signal 6= Default action<br> \
      sa_handler of signal 7 = Default action<br> \
      sa_handler of signal 8 = Default action<br> \
      sa_handler of signal 9 = Default action<br> \
      sa_handler of signal 10 = 0x8048400<br> \
      sa_handler of signal 11 = Default action<br> \
      sa_handler of signal 12 = Default action<br> \
      sa_handler of signal 13 = Default action<br> \
      sa_handler of signal 14 = Default action<br> \
      </font> </td> \
  </tr> \
',
'sigaddset_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sigaddset（增加一個信號至信號集） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigemptyset，sigfillset，sigdelset，sigismember<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sigaddset(sigset_t *set,int signum);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigaddset()用來將參數signum 代表的信號加入至參數set 信號集裡。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EFAULT 參數set指針地址無法存取<br> \
      EINVAL 參數signum非合法的信號編號<br> \
      </font> </td> \
  </tr> \
',
'sigdelset_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sigdelset（從信號集裡刪除一個信號） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigemptyset，sigfillset，sigaddset，sigismember<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sigdelset(sigset_t * set,int signum);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigdelset()用來將參數signum代表的信號從參數set信號集裡刪除。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EFAULT 參數set指針地址無法存取<br> \
      EINVAL 參數signum非合法的信號編號<br> \
      </font> </td> \
  </tr> \
',
'sigemptyset_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sigemptyset（初始化信號集） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigaddset，sigfillset，sigdelset，sigismember<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sigemptyset(sigset_t *set);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigemptyset()用來將參數set信號集初始化並清空。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EFAULT 參數set指針地址無法存取<br> \
      </font> </td> \
  </tr> \
',
'sigfillset_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sigfillset（將所有信號加入至信號集） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigempty，sigaddset，sigdelset，sigismember<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sigfillset(sigset_t * set);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigfillset()用來將參數set信號集初始化，然後把所有的信號加入到此信號集裡。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EFAULT 參數set指針地址無法存取<br> \
      </font> </td> \
  </tr> \
',
'sigismember_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sigismember（測試某個信號是否已加入至信號集裡） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigemptyset，sigfillset，sigaddset，sigdelset<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sigismember(const sigset_t *set,int signum);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigismember()用來測試參數signum 代表的信號是否已加入至參數set信號集裡。如果信號集裡已有該信號則返回1，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 信號集已有該信號則返回1，沒有則返回0。如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EFAULT 參數set指針地址無法存取<br> \
      EINVAL 參數signum 非合法的信號編號<br> \
      </font> </td> \
  </tr> \
',
'signal_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      signal（設置信號處理方式） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigaction，kill，raise<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void (*signal(int signum,void(* handler)(int)))(int);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> signal()會依參數signum 指定的信號編號來設置該信號的處理函數。當指定的信號到達時就會跳轉到參數handler指定的函數執行。如果參數handler不是函數指標，則必須是下列兩個常數之一:<br> \
      SIG_IGN 忽略參數signum指定的信號。<br> \
      SIG_DFL 將參數signum 指定的信號重設為核心預設的信號處理方式。<br> \
      關於信號的編號和說明，請參考附錄D<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回先前的信號處理函數指標，如果有錯誤則返回SIG_ERR(-1)。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 在信號發生跳轉到自定的handler處理函數執行後，系統會自動將此處理函數換回原來系統預設的處理方式，如果要改變此操作請改用sigaction()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考alarm()或raise()。<br> \
      </font> </td> \
  </tr> \
',
'sigpending_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sigpending（查詢被擱置的信號） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> signal，sigaction，sigprocmask，sigsuspend<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sigpending(sigset_t *set);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigpending()會將被擱置的信號集合由參數set指標返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值執 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 行成功則返回0，如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EFAULT 參數set指針地址無法存取<br> \
      EINTR 此調用被中斷。<br> \
      </font> </td> \
  </tr> \
',
'sigprocmask_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sigprocmask（查詢或設置信號遮罩） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> signal，sigaction，sigpending，sigsuspend<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;signal.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int sigprocmask(int how,const sigset_t *set,sigset_t  \
      * oldset);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sigprocmask()可以用來改變目前的信號遮罩，其操作依參數how來決定<br> \
      SIG_BLOCK 新的信號遮罩由目前的信號遮罩和參數set 指定的信號遮罩作聯集<br> \
      SIG_UNBLOCK 將目前的信號遮罩刪除掉參數set指定的信號遮罩<br> \
      SIG_SETMASK 將目前的信號遮罩設成參數set指定的信號遮罩。<br> \
      如果參數oldset不是NULL指標，那麼目前的信號遮罩會由此指標返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，如果有錯誤則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EFAULT 參數set，oldset指針地址無法存取。<br> \
      EINTR 此調用被中斷<br> \
      </font> </td> \
  </tr> \
',
'sleep_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      sleep（讓進程暫停執行一段時間） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> signal，alarm<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> unsigned int sleep(unsigned int seconds);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> sleep()會令目前的進程暫停，直到達到參數seconds 所指定的時間，或是被信號所中斷。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若進程暫停到參數seconds 所指定的時間則返回0，若有信號中斷則返回剩餘秒數。<br> \
      </font> </td> \
  </tr> \
',
'ferror_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      ferror（檢查檔流是否有錯誤發生） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> clearerr，perror<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int ferror(FILE *stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ferror()用來檢查參數stream所指定的檔流是否發生了錯誤情況，如有錯誤發生則返回非0值。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果檔流有錯誤發生則返回非0值。<br> \
      </font> </td> \
  </tr> \
',
'perror_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      perror（列印出錯誤原因資訊字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> strerror<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> void perror(const char *s);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> perror()用來將上一個函數發生錯誤的原因輸出到標準錯誤(stderr)。參數s所指的字串會先列印出，後面再加上錯誤原因字串。此錯誤原因依照全域變數errno的值來決定要輸出的字串。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE *fp;<br> \
      fp = fopen(“/tmp/noexist”,”r+”);<br> \
      if(fp = =NULL) perror(“fopen”);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> $ ./perror<br> \
      fopen : No such file or diretory<br> \
      </font> </td> \
  </tr> \
',
'strerror_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      strerror（返回錯誤原因的描述字串） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> perror<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;string.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> char * strerror(int errnum);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> strerror()用來依參數errnum的錯誤代碼來查詢其錯誤原因的描述字串，然後將該字串指標返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回描述錯誤原因的字串指標。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 顯示錯誤代碼0 至9 的錯誤原因描述*/<br> \
      #include&lt;string.h&gt;<br> \
      main()<br> \
      {<br> \
      int i;<br> \
      for(i=0;i&lt;10;i++)<br> \
      printf(“%d : %s\n”,i,strerror(i));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 0 : Success<br> \
      1 : Operation not permitted<br> \
      2 : No such file or directory<br> \
      3 : No such process<br> \
      4 : Interrupted system call<br> \
      5 : Input/output error<br> \
      6 : Device not configured<br> \
      7 : Argument list too long<br> \
      8 : Exec format error<br> \
      9 : Bad file descriptor<br> \
      </font> </td> \
  </tr> \
',
'mkfifo_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      mkfifo（建立具名管道） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pipe，popen，open，umask<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int mkfifo(const char * pathname,mode_t mode);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> mkfifo()會依參數pathname建立特殊的FIFO檔，該檔必須不存在，而參數mode為該檔的許可權（mode%~umask），因此umask值也會影響到FIFO檔的許可權。Mkfifo()建立的FIFO檔其他進程都可以用讀寫一般檔的方式存取。當使用open()來打開FIFO檔時，O_NONBLOCK旗標會有影響<br> \
      1、當使用O_NONBLOCK 旗標時，打開FIFO 檔來讀取的操作會立刻返回，但是若還沒有其他進程打開FIFO 檔來讀取，則寫入的操作會返回ENXIO  \
      錯誤代碼。<br> \
      2、沒有使用O_NONBLOCK 旗標時，打開FIFO 來讀取的操作會等到其他進程打開FIFO檔來寫入才正常返回。同樣地，打開FIFO文件來寫入的操作會等到其他進程打開FIFO  \
      文件來讀取後才正常返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若成功則返回0，否則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EACCESS 參數pathname所指定的目錄路徑無可執行的許可權<br> \
      EEXIST 參數pathname所指定的文件已存在。<br> \
      ENAMETOOLONG 參數pathname的路徑名稱太長。<br> \
      ENOENT 參數pathname包含的目錄不存在<br> \
      ENOSPC 檔案系統的剩餘空間不足<br> \
      ENOTDIR 參數pathname路徑中的目錄存在但卻非真正的目錄。<br> \
      EROFS 參數pathname指定的檔存在於唯讀檔案系統內。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      main()<br> \
      {<br> \
      char buffer[80];<br> \
      int fd;<br> \
      unlink(FIFO);<br> \
      mkfifo(FIFO,0666);<br> \
      if(fork()&gt;0){<br> \
      char s[ ] = “hello!\n”;<br> \
      fd = open (FIFO,O_WRONLY);<br> \
      write(fd,s,sizeof(s));<br> \
      close(fd);<br> \
      }<br> \
      else{<br> \
      fd= open(FIFO,O_RDONLY);<br> \
      read(fd,buffer,80);<br> \
      printf(“%s”,buffer);<br> \
      close(fd);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> hello!<br> \
      </font> </td> \
  </tr> \
',
'pclose_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      pclose（關閉管道I/O） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> popen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int pclose(FILE * stream);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pclose()用來關閉由popen所建立的管道及文件指針。參數stream為先前由popen()所返回的文件指針。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 返回子進程的結束狀態。如果有錯誤則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ECHILD pclose()無法取得子進程的結束狀態。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考popen()。<br> \
      </font> </td> \
  </tr> \
',
'pipe_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      pipe（建立管道） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> mkfifo，popen，read，write，fork<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int pipe(int filedes[2]);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pipe()會建立管道，並將文件描述詞由參數filedes陣列返回。filedes[0]為管道裡的讀取端，filedes[1]則為管道的寫入端。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若成功則返回零，否則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EMFILE 進程已用完檔描述詞最大量。<br> \
      ENFILE 系統已無檔描述詞可用。<br> \
      EFAULT 參數filedes陣列位址不合法。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /* 父進程借管道將字串“hello!\n”傳給子進程並顯示*/<br> \
      #include &lt;unistd.h&gt;<br> \
      main()<br> \
      {<br> \
      int filedes[2];<br> \
      char buffer[80];<br> \
      pipe(filedes);<br> \
      if(fork()&gt;0){<br> \
      /* 父進程*/<br> \
      char s[ ] = “hello!\n”;<br> \
      write(filedes[1],s,sizeof(s));<br> \
      }<br> \
      else{<br> \
      /*子進程*/<br> \
      read(filedes[0],buffer,80);<br> \
      printf(“%s”,buffer);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> hello!<br> \
      </font> </td> \
  </tr> \
',
'popen_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      popen（建立管道I/O） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> pipe，mkfifo，pclose，fork，system，fopen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> FILE * popen( const char * command,const char  \
      * type);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> popen()會調用fork()產生子進程，然後從子進程中調用/bin/sh -c來執行參數command的指令。參數type可使用“r”代表讀取，“w”代表寫入。依照此type值，popen()會建立管道連到子進程的標準輸出設備或標準輸入裝置，然後返回一個檔指標。隨後進程便可利用此檔指標來讀取子進程的輸出設備或是寫入到子進程的標準輸入裝置中。此外，所有使用檔指標(FILE*)操作的函數也都可以使用，除了fclose()以外。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 若成功則返回檔指針，否則返回NULL，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> EINVAL參數type不合法。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 注意事項 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 在編寫具SUID/SGID許可權的程式時請儘量避免使用popen()，popen()會繼承環境變數，通過環境變數可能會造成系統安全的問題。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      main()<br> \
      {<br> \
      FILE * fp;<br> \
      char buffer[80];<br> \
      fp=popen(“cat /etc/passwd”,”r”);<br> \
      fgets(buffer,sizeof(buffer),fp);<br> \
      printf(“%s”,buffer);<br> \
      pclose(fp);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> root :x:0 0: root: /root: /bin/bash<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'accept_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      accept（接受socket連線） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> socket，bind，listen，connect<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int accept(int s,struct sockaddr  \
      * addr,int * addrlen);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> accept()用來接受參數s的socket連線。參數s的socket必需先經bind()、listen()函數處理過，當有連線進來時accept()會返回一個新的socket處理代碼，往後的資料傳送與讀取就是經由新的socket處理，而原來參數s的socket能繼續使用accept()來接受新的連線要求。連線成功時，參數addr所指的結構會被系統填入遠端主機的位址資料，參數addrlen為scokaddr的結構長度。關於結構sockaddr的定義請參考bind()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回新的socket處理代碼，失敗返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s 非合法socket處理代碼。<br> \
      EFAULT 參數addr指標指向無法存取的記憶體空間。<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket。<br> \
      EOPNOTSUPP 指定的socket並非SOCK_STREAM。<br> \
      EPERM 防火牆拒絕此連線。<br> \
      ENOBUFS 系統的緩衝記憶體不足。<br> \
      ENOMEM 核心記憶體不足。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考listen()。<br> \
      </font> </td> \
  </tr> \
',
'bind_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      bind（對socket定位） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> socket，accept，connect，listen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int bind(int sockfd,struct sockaddr  \
      * my_addr,int addrlen);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> bind()用來設置給參數sockfd的socket一個名稱。此名稱由參數my_addr指向一sockaddr結構，對於不同的socket  \
      domain定義了一個通用的資料結構<br> \
      struct sockaddr<br> \
      {<br> \
      unsigned short int sa_family;<br> \
      char sa_data[14];<br> \
      };<br> \
      sa_family 為調用socket（）時的domain參數，即AF_xxxx值。<br> \
      sa_data 最多使用14個字元長度。<br> \
      此sockaddr結構會因使用不同的socket domain而有不同結構定義，例如使用AF_INET domain，其socketaddr結構定義便為<br> \
      struct socketaddr_in<br> \
      {<br> \
      unsigned short int sin_family;<br> \
      uint16_t sin_port;<br> \
      struct in_addr sin_addr;<br> \
      unsigned char sin_zero[8];<br> \
      };<br> \
      struct in_addr<br> \
      {<br> \
      uint32_t s_addr;<br> \
      };<br> \
      sin_family 即為sa_family<br> \
      sin_port 為使用的port編號<br> \
      sin_addr.s_addr 為IP 地址<br> \
      sin_zero 未使用。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> addrlen為sockaddr的結構長度。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數sockfd 非合法socket處理代碼。<br> \
      EACCESS 許可權不足<br> \
      ENOTSOCK 參數sockfd為一檔描述詞，非socket。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考listen()<br> \
      </font> </td> \
  </tr> \
',
'connect_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      connect（建立socket連線） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> socket，bind，listen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int connect (int sockfd,struct  \
      sockaddr * serv_addr,int addrlen);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> connect()用來將參數sockfd 的socket 連至參數serv_addr  \
      指定的網路位址。結構sockaddr請參考bind()。參數addrlen為sockaddr的結構長度。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數sockfd 非合法socket處理代碼<br> \
      EFAULT 參數serv_addr指標指向無法存取的記憶體空間<br> \
      ENOTSOCK 參數sockfd為一檔描述詞，非socket。<br> \
      EISCONN 參數sockfd的socket已是連線狀態<br> \
      ECONNREFUSED 連線要求被server端拒絕。<br> \
      ETIMEDOUT 企圖連線的操作超過限定時間仍未有回應。<br> \
      ENETUNREACH 無法傳送資料包至指定的主機。<br> \
      EAFNOSUPPORT sockaddr結構的sa_family不正確。<br> \
      EALREADY socket為不可阻斷且先前的連線操作還未完成。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /* 利用socket的TCP client<br> \
      此程式會連線TCP server，並將鍵盤輸入的字串傳送給server。<br> \
      TCP server範例請參考listen（）。<br> \
      */<br> \
      #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      #include&lt;netinet/in.h&gt;<br> \
      #include&lt;arpa/inet.h&gt;<br> \
      #define PORT 1234<br> \
      #define SERVER_IP “127.0.0.1”<br> \
      main()<br> \
      {<br> \
      int s;<br> \
      struct sockaddr_in addr;<br> \
      char buffer[256];<br> \
      if((s = socket(AF_INET,SOCK_STREAM,0))&lt;0){<br> \
      perror(“socket”);<br> \
      exit(1);<br> \
      }<br> \
      /* 填寫sockaddr_in結構*/<br> \
      bzero(&addr,sizeof(addr));<br> \
      addr.sin_family = AF_INET;<br> \
      addr.sin_port=htons(PORT);<br> \
      addr.sin_addr.s_addr = inet_addr(SERVER_IP);<br> \
      /* 嘗試連線*/<br> \
      if(connect(s,&addr,sizeof(addr))&lt;0){<br> \
      perror(“connect”);<br> \
      exit(1);<br> \
      }<br> \
      /* 接收由server端傳來的資訊*/<br> \
      recv(s,buffer,sizeof(buffer),0);<br> \
      printf(“%s\n”,buffer);<br> \
      while(1){<br> \
      bzero(buffer,sizeof(buffer));<br> \
      /* 從標準輸入裝置取得字串*/<br> \
      read(STDIN_FILENO,buffer,sizeof(buffer));<br> \
      /* 將字串傳給server端*/<br> \
      if(send(s,buffer,sizeof(buffer),0)&lt;0){<br> \
      perror(“send”);<br> \
      exit(1);<br> \
      }<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> $ ./connect<br> \
      Welcome to server!<br> \
      hi I am client! /*鍵盤輸入*/<br> \
      /*&lt;Ctrl+C&gt;中斷程式*/<br> \
      </font> </td> \
  </tr> \
',
'endprotoent_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      endprotoent（結束網路通訊協定數據的讀取） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> getprotoent，getprotobyname，getprotobynumber，setprotoent<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;netdb.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void endprotoent(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> endprotoent()用來關閉由getprotoent()打開的文件。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考getprotoent()<br> \
      </font> </td> \
  </tr> \
',
'endservent_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      endservent（結束網路服務資料的讀取） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> getservent，getservbyname，getservbyport，setservent<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;netdb.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void endservent(void);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> endservent()用來關閉由getservent()所打開的文件。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考getservent()。<br> \
      </font> </td> \
  </tr> \
',
'getsockopt_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      getsockopt（取得socket狀態） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> setsockopt<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int getsockopt(int s,int level,int  \
      optname,void* optval,socklen_t* optlen);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> getsockopt()會將參數s所指定的socket狀態返回。參數optname代表欲取得何種選項狀態，而參數optval則指向欲保存結果的記憶體位址，參數optlen則為該空間的大小。參數level、optname請參考setsockopt()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回0，若有錯誤則返回-1，錯誤原因存於errno<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s 並非合法的socket處理代碼<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket<br> \
      ENOPROTOOPT 參數optname指定的選項不正確<br> \
      EFAULT 參數optval指標指向無法存取的記憶體空間<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      main()<br> \
      {<br> \
      int s,optval,optlen = sizeof(int);<br> \
      if((s = socket(AF_INET,SOCK_STREAM,0))&lt;0) perror(“socket”);<br> \
      getsockopt(s,SOL_SOCKET,SO_TYPE,&optval,&optlen);<br> \
      printf(“optval = %d\n”,optval);<br> \
      close(s);}<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> optval = 1 /*SOCK_STREAM的定義正是此值*/<br> \
      </font> </td> \
  </tr> \
',
'htonl_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      htonl（將32位元主機字元順序轉換成網路字元順序） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> htons，ntohl，ntohs<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;netinet/in.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> unsigned long int htonl(unsigned  \
      long int hostlong);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> htonl（）用來將參數指定的32位元hostlong 轉換成網路字元順序。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回對應的網路字元順序。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考getservbyport()或connect()。<br> \
      </font> </td> \
  </tr> \
',
'htons_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      htons（將16位元主機字元順序轉換成網路字元順序） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> htonl，ntohl，ntohs<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;netinet/in.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> unsigned short int htons(unsigned  \
      short int hostshort);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> htons()用來將參數指定的16位元hostshort轉換成網路字元順序。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回對應的網路字元順序。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考connect()。<br> \
      </font> </td> \
  </tr> \
',
'inet_addr_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      inet_addr（將網路位址轉成二進位的數位） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> inet_aton，inet_ntoa<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/socket.h&gt;<br> \
      #include&lt;netinet/in.h&gt;<br> \
      #include&lt;arpa/inet.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> unsigned long int inet_addr(const  \
      char *cp);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> inet_addr()用來將參數cp所指的網路位址字串轉換成網路所使用的二進位數字字。網路位址字串是以數位和點組成的字串，例如:“163.13.132.68”。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回對應的網路二進位的數位，失敗返回-1。<br> \
      </font> </td> \
  </tr> \
',
'inet_aton_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      inet_aton（將網路位址轉成網路二進位的數位） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> inet_addr，inet_ntoa<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/scoket.h&gt;<br> \
      #include&lt;netinet/in.h&gt;<br> \
      #include&lt;arpa/inet.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int inet_aton(const char * cp,struct  \
      in_addr *inp);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> inet_aton()用來將參數cp所指的網路位址字串轉換成網路使用的二進位的數位，然後存於參數inp所指的in_addr結構中。<br> \
      結構in_addr定義如下<br> \
      struct in_addr<br> \
      {<br> \
      unsigned long int s_addr;<br> \
      };<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回非0值，失敗則返回0。<br> \
      </font> </td> \
  </tr> \
',
'inet_ntoa_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      inet_ntoa（將網路二進位的數位轉換成網路位址） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> inet_addr，inet_aton<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/socket.h&gt;<br> \
      #include&lt;netinet/in.h&gt;<br> \
      #include&lt;arpa/inet.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> char * inet_ntoa(struct in_addr  \
      in);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> inet_ntoa()用來將參數in所指的網路二進位的數位轉換成網路位址，然後將指向此網路位址字串的指標返回。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回字串指標，失敗則返回NULL。<br> \
      </font> </td> \
  </tr> \
',
'listen_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      listen（等待連接） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> socket，bind，accept，connect<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int listen(int s,int backlog);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> listen()用來等待參數s 的socket連線。參數backlog指定同時能處理的最大連接要求，如果連接數目達此上限則client端將收到ECONNREFUSED的錯誤。Listen()並未開始接收連線，只是設置socket為listen模式，真正接收client端連線的是accept()。通常listen()會在socket()，bind()之後調用，接著才調用accept()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，錯誤原因存於errno<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> listen()只適用SOCK_STREAM或SOCK_SEQPACKET的socket類型。如果socket為AF_INET則參數backlog  \
      最大值可設至128。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數sockfd非合法socket處理代碼<br> \
      EACCESS 許可權不足<br> \
      EOPNOTSUPP 指定的socket並未支援listen模式。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      #include&lt;netinet/in.h&gt;<br> \
      #include&lt;arpa/inet.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      #define PORT 1234<br> \
      #define MAXSOCKFD 10<br> \
      main()<br> \
      {<br> \
      int sockfd,newsockfd,is_connected[MAXSOCKFD],fd;<br> \
      struct sockaddr_in addr;<br> \
      int addr_len = sizeof(struct sockaddr_in);<br> \
      fd_set readfds;<br> \
      char buffer[256];<br> \
      char msg[ ] =”Welcome to server!”;<br> \
      if ((sockfd = socket(AF_INET,SOCK_STREAM,0))&lt;0){<br> \
      perror(“socket”);<br> \
      exit(1);<br> \
      }<br> \
      bzero(&addr,sizeof(addr));<br> \
      addr.sin_family =AF_INET;<br> \
      addr.sin_port = htons(PORT);<br> \
      addr.sin_addr.s_addr = htonl(INADDR_ANY);<br> \
      if(bind(sockfd,&addr,sizeof(addr))&lt;0){<br> \
      perror(“connect”);<br> \
      exit(1);<br> \
      }<br> \
      if(listen(sockfd,3)&lt;0){<br> \
      perror(“listen”);<br> \
      exit(1);<br> \
      }<br> \
      for(fd=0;fd&lt;MAXSOCKFD;fd++)<br> \
      is_connected[fd]=0;<br> \
      while(1){<br> \
      FD_ZERO(&readfds);<br> \
      FD_SET(sockfd,&readfds);<br> \
      for(fd=0;fd&lt;MAXSOCKFD;fd++)<br> \
      if(is_connected[fd]) FD_SET(fd,&readfds);<br> \
      if(!select(MAXSOCKFD,&readfds,NULL,NULL,NULL))continue;<br> \
      for(fd=0;fd&lt;MAXSOCKFD;fd++)<br> \
      if(FD_ISSET(fd,&readfds)){<br> \
      if(sockfd = =fd){<br> \
      if((newsockfd = accept (sockfd,&addr,&addr_len))&lt;0)<br> \
      perror(“accept”);<br> \
      write(newsockfd,msg,sizeof(msg));<br> \
      is_connected[newsockfd] =1;<br> \
      printf(“cnnect from %s\n”,inet_ntoa(addr.sin_addr));<br> \
      }else{<br> \
      bzero(buffer,sizeof(buffer));<br> \
      if(read(fd,buffer,sizeof(buffer))&lt;=0){<br> \
      printf(“connect closed.\n”);<br> \
      is_connected[fd]=0;<br> \
      close(fd);<br> \
      }else<br> \
      printf(“%s”,buffer);<br> \
      }<br> \
      }<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> $ ./listen<br> \
      connect from 127.0.0.1<br> \
      hi I am client<br> \
      connected closed.<br> \
      </font> </td> \
  </tr> \
',
'ntohl_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      ntohl（將32位元網路字元順序轉換成主機字元順序） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> htonl，htons，ntohs<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;netinet/in.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> unsigned long int ntohl(unsigned  \
      long int netlong);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ntohl()用來將參數指定的32位元netlong轉換成主機字元順序。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回對應的主機字元順序。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考getservent()。<br> \
      </font> </td> \
  </tr> \
',
'ntohs_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      ntohs（將16位元網路字元順序轉換成主機字元順序） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> htonl，htons，ntohl<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;netinet/in.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> unsigned short int ntohs(unsigned  \
      short int netshort);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> ntohs()用來將參數指定的16位元netshort轉換成主機字元順序。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 返回對應的主機順序。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考getservent()。<br> \
      </font> </td> \
  </tr> \
',
'recv_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      recv（經socket接收資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> recvfrom，recvmsg，send，sendto，socket<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int recv(int s,void *buf,int len,unsigned  \
      int flags);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> recv()用來接收遠端主機經指定的socket傳來的資料，並把資料存到由參數buf  \
      指向的記憶體空間，參數len為可接收資料的最大長度。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> flags一般設0。其他數值定義如下:<br> \
      MSG_OOB 接收以out-of-band 送出的資料。<br> \
      MSG_PEEK 返回來的資料並不會在系統內刪除，如果再調用recv()會返回相同的資料內容。<br> \
      MSG_WAITALL強迫接收到len大小的資料後才能返回，除非有錯誤或信號產生。<br> \
      MSG_NOSIGNAL此操作不願被SIGPIPE信號中斷返回值成功則返回接收到的字元數，失敗返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s非合法的socket處理代碼<br> \
      EFAULT 參數中有一指標指向無法存取的記憶體空間<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket。<br> \
      EINTR 被信號所中斷<br> \
      EAGAIN 此動作會令進程阻斷，但參數s的socket為不可阻斷<br> \
      ENOBUFS 系統的緩衝記憶體不足。<br> \
      ENOMEM 核心記憶體不足<br> \
      EINVAL 傳給系統調用的參數不正確。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考listen()。<br> \
      </font> </td> \
  </tr> \
',
'recvfrom_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      recvfrom（經socket接收資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> recv，recvmsg，send，sendto，socket<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int recvfrom(int s,void *buf,int  \
      len,unsigned int flags ,struct sockaddr *from ,int *fromlen);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> recv()用來接收遠端主機經指定的socket 傳來的資料，並把資料存到由參數buf  \
      指向的記憶體空間，參數len 為可接收資料的最大長度。參數flags 一般設0，其他數值定義請參考recv()。參數from用來指定欲傳送的網路位址，結構sockaddr  \
      請參考bind()。參數fromlen為sockaddr的結構長度。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回接收到的字元數，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s非合法的socket處理代碼<br> \
      EFAULT 參數中有一指標指向無法存取的記憶體空間。<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket。<br> \
      EINTR 被信號所中斷。<br> \
      EAGAIN 此動作會令進程阻斷，但參數s的socket為不可阻斷。<br> \
      ENOBUFS 系統的緩衝記憶體不足<br> \
      ENOMEM 核心記憶體不足<br> \
      EINVAL 傳給系統調用的參數不正確。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> /*利用socket的UDP client<br> \
      此程式會連線UDP server，並將鍵盤輸入的字串傳給server。<br> \
      UDP server 範例請參考sendto（）。<br> \
      */<br> \
      #include&lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      #include&lt;sys/typs.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      #include&lt;netinet/in.h&gt;<br> \
      #include&lt;arpa/inet.h&gt;<br> \
      #define PORT 2345<br> \
      #define SERVER_IP “127.0.0.1”<br> \
      main()<br> \
      {<br> \
      int s,len;<br> \
      struct sockaddr_in addr;<br> \
      int addr_len =sizeof(struct sockaddr_in);<br> \
      char buffer[256];<br> \
      /* 建立socket*/<br> \
      if((s = socket(AF_INET,SOCK_DGRAM,0))&lt;0){<br> \
      perror(“socket”);<br> \
      exit(1);<br> \
      }<br> \
      /* 填寫sockaddr_in*/<br> \
      bzero(&addr,sizeof(addr));<br> \
      addr.sin_family = AF_INET;<br> \
      addr.sin_port = htons(PORT);<br> \
      addr.sin_addr.s_addr = inet_addr(SERVER_IP);<br> \
      while(1){<br> \
      bzero(buffer,sizeof(buffer));<br> \
      /* 從標準輸入裝置取得字串*/<br> \
      len =read(STDIN_FILENO,buffer,sizeof(buffer));<br> \
      /* 將字串傳送給server端*/<br> \
      sendto(s,buffer,len,0,&addr,addr_len);<br> \
      /* 接收server端返回的字串*/<br> \
      len = recvfrom(s,buffer,sizeof(buffer),0,&addr,&addr_len);<br> \
      printf(“receive: %s”,buffer);<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> (先執行udp server 再執行udp client)<br> \
      hello /*從鍵盤輸入字串*/<br> \
      receive: hello /*server端返回來的字串*/<br> \
      </font> </td> \
  </tr> \
',
'recvmsg_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      recvmsg（經socket接收資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> recv，recvfrom，send，sendto，sendmsg，socket<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socktet.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int recvmsg(int s,struct msghdr  \
      *msg,unsigned int flags);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> recvmsg()用來接收遠端主機經指定的socket傳來的資料。參數s為已建立好連線的socket，如果利用UDP協議則不需經過連線操作。參數msg指向欲連線的資料結構內容，參數flags一般設0，詳細描述請參考send()。關於結構msghdr的定義請參考sendmsg()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回接收到的字元數，失敗則返回-1，錯誤原因存於errno中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s非合法的socket處理代碼。<br> \
      EFAULT 參數中有一指標指向無法存取的記憶體空間<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket。<br> \
      EINTR 被信號所中斷。<br> \
      EAGAIN 此操作會令進程阻斷，但參數s的socket為不可阻斷。<br> \
      ENOBUFS 系統的緩衝記憶體不足<br> \
      ENOMEM 核心記憶體不足<br> \
      EINVAL 傳給系統調用的參數不正確。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考recvfrom()。<br> \
      </font> </td> \
  </tr> \
',
'send_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      send（經socket傳送資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sendto，sendmsg，recv，recvfrom，socket<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int send(int s,const void * msg,int  \
      len,unsigned int falgs);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> send()用來將資料由指定的socket 傳給對方主機。參數s為已建立好連接的socket。參數msg指向欲連線的資料內容，參數len則為資料長度。參數flags一般設0，其他數值定義如下<br> \
      MSG_OOB 傳送的資料以out-of-band 送出。<br> \
      MSG_DONTROUTE 取消路由表查詢<br> \
      MSG_DONTWAIT 設置為不可阻斷運作<br> \
      MSG_NOSIGNAL 此動作不願被SIGPIPE 信號中斷。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回實際傳送出去的字元數，失敗返回-1。錯誤原因存於errno<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s 非合法的socket處理代碼。<br> \
      EFAULT 參數中有一指標指向無法存取的記憶體空間<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket。<br> \
      EINTR 被信號所中斷。<br> \
      EAGAIN 此操作會令進程阻斷，但參數s的socket為不可阻斷。<br> \
      ENOBUFS 系統的緩衝記憶體不足<br> \
      ENOMEM 核心記憶體不足<br> \
      EINVAL 傳給系統調用的參數不正確。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考connect()<br> \
      </font> </td> \
  </tr> \
',
'sendmsg_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      sendmsg（經socket傳送資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> send，sendto，recv，recvfrom，recvmsg，socket<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int sendmsg(int s,const strcut  \
      msghdr *msg,unsigned int flags);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sendmsg()用來將資料由指定的socket傳給對方主機。參數s為已建立好連線的socket，如果利用UDP協議則不需經過連線操作。參數msg  \
      指向欲連線的資料結構內容，參數flags一般預設為0，詳細描述請參考send()。<br> \
      結構msghdr定義如下<br> \
      struct msghdr<br> \
      {<br> \
      void *msg_name; /*Address to send to /receive from . */<br> \
      socklen_t msg_namelen; /* Length of addres data */<br> \
      strcut iovec * msg_iov; /* Vector of data to send/receive into */<br> \
      size_t msg_iovlen; /* Number of elements in the vector */<br> \
      void * msg_control; /* Ancillary dat */<br> \
      size_t msg_controllen; /* Ancillary data buffer length */<br> \
      int msg_flags; /* Flags on received message */<br> \
      };<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回實際傳送出去的字元數，失敗返回-1，錯誤原因存於errno<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s 非合法的socket處理代碼。<br> \
      EFAULT 參數中有一指標指向無法存取的記憶體空間<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket。<br> \
      EINTR 被信號所中斷。<br> \
      EAGAIN 此操作會令進程阻斷，但參數s的socket為不可阻斷。<br> \
      ENOBUFS 系統的緩衝記憶體不足<br> \
      ENOMEM 核心記憶體不足<br> \
      EINVAL 傳給系統調用的參數不正確。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考sendto()。<br> \
      </font> </td> \
  </tr> \
',
'sendto_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      sendto（經socket傳送資料） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> send , sendmsg,recv , recvfrom  \
      , socket<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt; sys/types.h &gt;<br> \
      #include &lt; sys/socket.h &gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int sendto ( int s , const void  \
      * msg, int len, unsigned int flags, const <br> \
      struct sockaddr * to , int tolen ) ;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> sendto() 用來將資料由指定的socket傳給對方主機。參數s為已建好連線的socket,如果利用UDP協議則不需經過連線操作。參數msg指向欲連線的資料內容，參數flags  \
      一般設0，詳細描述請參考send()。參數to用來指定欲傳送的網路位址，結構sockaddr請參考bind()。參數tolen為sockaddr的結果長度。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回實際傳送出去的字元數，失敗返回－1，錯誤原因存於errno  \
      中。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s非法的socket處理代碼。<br> \
      EFAULT 參數中有一指標指向無法存取的記憶體空間。<br> \
      WNOTSOCK canshu s為一檔描述詞，非socket。<br> \
      EINTR 被信號所中斷。<br> \
      EAGAIN 此動作會令進程阻斷，但參數s的soket為補課阻斷的。<br> \
      ENOBUFS 系統的緩衝記憶體不足。<br> \
      EINVAL 傳給系統調用的參數不正確。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt; sys/types.h &gt;<br> \
      #include &lt; sys/socket.h &gt;<br> \
      # include &lt;netinet.in.h&gt;<br> \
      #include &lt;arpa.inet.h&gt;<br> \
      #define PORT 2345 /*使用的port*/<br> \
      main(){<br> \
      int sockfd,len;<br> \
      struct sockaddr_in addr;<br> \
      char buffer[256];<br> \
      /*建立socket*/<br> \
      if(sockfd=socket (AF_INET,SOCK_DGRAM,0))&lt;0){<br> \
      perror (“socket”);<br> \
      exit(1);<br> \
      }<br> \
      /*填寫sockaddr_in 結構*/<br> \
      bzero ( &addr, sizeof(addr) );<br> \
      addr.sin_family=AF_INET;<br> \
      addr.sin_port=htons(PORT);<br> \
      addr.sin_addr=hton1(INADDR_ANY) ;<br> \
      if (bind(sockfd, &addr, sizeof(addr))&lt;0){<br> \
      perror(“connect”);<br> \
      exit(1);<br> \
      }<br> \
      while(1){<br> \
      bezro(buffer,sizeof(buffer));<br> \
      len = recvfrom(socket,buffer,sizeof(buffer), 0 , &addr &addr_len);<br> \
      /*顯示client端的網路位址*/<br> \
      printf(“receive from %s\n “ , inet_ntoa( addr.sin_addr));<br> \
      /*將字串返回給client端*/<br> \
      sendto(sockfd,buffer,len,0,&addr,addr_len);”<br> \
      }<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 請參考recvfrom()<br> \
      </font> </td> \
  </tr> \
',
'setprotoent_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      setprotoent（打開網路通訊協定的資料檔案） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> getprotobyname, getprotobynumber,  \
      endprotoent<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt;netdb.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void setprotoent (int stayopen);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> setprotoent()用來打開/etc/protocols，  \
      如果參數stayopen值為1，則接下來的getprotobyname()或getprotobynumber()將不會自動關閉此檔。<br> \
      </font> </td> \
  </tr> \
',
'setservent_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      setservent（打開主機網路服務的資料檔案） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> getservent, getservbyname, getservbyport,  \
      endservent<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include &lt; netdb.h &gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> void setservent (int stayopen);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> setservent()用來打開/etc/services，如果參數stayopen值為1，則接下來的getservbyname()或getservbyport()將補回自動關閉檔。<br> \
      </font> </td> \
  </tr> \
',
'setsockopt_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      setsockopt（設置socket狀態） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> getsockopt<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int setsockopt(int s,int level,int  \
      optname,const void * optval,,socklen_toptlen);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> setsockopt()用來設置參數s所指定的socket狀態。參數level代表欲設置的網路層，一般設成SOL_SOCKET以存取socket層。參數optname代表欲設置的選項，有下列幾種數值:<br> \
      SO_DEBUG 打開或關閉排錯模式<br> \
      SO_REUSEADDR 允許在bind（）過程中本地位址可重複使用<br> \
      SO_TYPE 返回socket形態。<br> \
      SO_ERROR 返回socket已發生的錯誤原因<br> \
      SO_DONTROUTE 送出的資料包不要利用路由設備來傳輸。<br> \
      SO_BROADCAST 使用廣播方式傳送<br> \
      SO_SNDBUF 設置送出的暫存區大小<br> \
      SO_RCVBUF 設置接收的暫存區大小<br> \
      SO_KEEPALIVE 定期確定連線是否已終止。<br> \
      SO_OOBINLINE 當接收到OOB 資料時會馬上送至標準輸入裝置<br> \
      SO_LINGER 確保資料安全且可靠的傳送出去。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> optval代表欲設置的值，參數optlen則為optval的長度。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回0，若有錯誤則返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 附加說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s並非合法的socket處理代碼<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket<br> \
      ENOPROTOOPT 參數optname指定的選項不正確。<br> \
      EFAULT 參數optval指標指向無法存取的記憶體空間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考getsockopt()。<br> \
      </font> </td> \
  </tr> \
',
'shutdown_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      shutdown（終止socket通信） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> socket，connect<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int shutdown(int s,int how);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> shutdown()用來終止參數s所指定的socket連線。參數s是連線中的socket處理代碼，參數how有下列幾種情況:<br> \
      how=0 終止讀取操作。<br> \
      how=1 終止傳送操作<br> \
      how=2 終止讀取及傳送操作<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回0，失敗返回-1，錯誤原因存於errno。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EBADF 參數s不是有效的socket處理代碼<br> \
      ENOTSOCK 參數s為一檔描述詞，非socket<br> \
      ENOTCONN 參數s指定的socket並未連線<br> \
      </font> </td> \
  </tr> \
',
'socket_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> <br> \
      socket（建立一個socket通信） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> accept，bind，connect，listen<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> #include&lt;sys/types.h&gt;<br> \
      #include&lt;sys/socket.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> int socket(int domain,int type,int  \
      protocol);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> socket()用來建立一個新的socket，也就是向系統註冊，通知系統建立一通訊連接埠。參數domain  \
      指定使用何種的網址類別型，完整的定義在/usr/include/bits/socket.h 內，底下是常見的協議:<br> \
      PF_UNIX/PF_LOCAL/AF_UNIX/AF_LOCAL UNIX 進程通信協定<br> \
      PF_INET?AF_INET Ipv4網路通訊協定<br> \
      PF_INET6/AF_INET6 Ipv6 網路通訊協定<br> \
      PF_IPX/AF_IPX IPX-Novell協議<br> \
      PF_NETLINK/AF_NETLINK 核心使用者介面裝置<br> \
      PF_X25/AF_X25 ITU-T X.25/ISO-8208 協議<br> \
      PF_AX25/AF_AX25 業餘無線AX.25協議<br> \
      PF_ATMPVC/AF_ATMPVC 存取原始ATM PVCs<br> \
      PF_APPLETALK/AF_APPLETALK appletalk（DDP）協議<br> \
      PF_PACKET/AF_PACKET 初級封包介面<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> type有下列幾種數值:<br> \
      SOCK_STREAM 提供雙向連續且可信賴的資料流程，即TCP。支持<br> \
      OOB 機制，在所有資料傳送前必須使用connect()來建立連線狀態。<br> \
      SOCK_DGRAM 使用不連續不可信賴的資料包連接<br> \
      SOCK_SEQPACKET 提供連續可信賴的資料包連接<br> \
      SOCK_RAW 提供原始網路通訊協定存取<br> \
      SOCK_RDM 提供可信賴的資料包連接<br> \
      SOCK_PACKET 提供和網路驅動程式直接通信。<br> \
      protocol用來指定socket所使用的傳輸協定編號，通常此參考不用管它，設為0即可。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 成功則返回socket處理代碼，失敗返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> EPROTONOSUPPORT 參數domain指定的類型不支持參數type或protocol指定的協定<br> \
      ENFILE 核心記憶體不足，無法建立新的socket結構<br> \
      EMFILE 進程檔表溢出，無法再建立新的socket<br> \
      EACCESS 許可權不足，無法建立type或protocol指定的協定<br> \
      ENOBUFS/ENOMEM 記憶體不足<br> \
      EINVAL 參數domain/type/protocol不合法<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td valign="top"> <font face="Trebuchet MS" size="2"> 參考connect()。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'getenv_html': ' \
  <tr> \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getenv（取得環境變數內容） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> putenv，setenv，unsetenv<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> char * getenv(const char *name);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getenv()用來取得參數name環境變數的內容。參數name為環境變數的名稱，如果該變數存在則會返回指向該內容的指標。環境變數的格式為name＝value。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回指向該內容的指標，找不到符合的環境變數名稱則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      mian()<br> \
      {<br> \
      char *p;<br> \
      if((p = getenv(“USER”)))<br> \
      printf(“USER=%s\n”,p);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> USER = root<br> \
      </font> </td> \
  </tr> \
',
'putenv_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      putenv（改變或增加環境變數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getenv，setenv，unsetenv<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include4&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int putenv(const char * string);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> putenv()用來改變或增加環境變數的內容。參數string的格式為name＝value，如果該環境變數原先存在，則變數內容會依參數string改變，否則此參數內容會成為新的環境變數。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，有錯誤發生則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ENOMEM 記憶體不足，無法配置新的環境變數空間。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      char *p;<br> \
      if((p = getenv(“USER”)))<br> \
      printf(“USER =%s\n”,p);<br> \
      putenv(“USER=test”);<br> \
      printf(“USER+5s\n”,getenv(“USER”));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> USER=root<br> \
      USER=root<br> \
      </font> </td> \
  </tr> \
',
'setenv_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      setenv（改變或增加環境變數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getenv，putenv，unsetenv<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int setenv(const char *name,const char * value,int  \
      overwrite);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> setenv()用來改變或增加環境變數的內容。參數name為環境變數名稱字串。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> value則為變數內容，參數overwrite用來決定是否要改變已存在的環境變數。如果overwrite不為0，而該環境變數原已有內容，則原內容會被改為參數value所指的變數內容。如果overwrite為0，且該環境變數已有內容，則參數value會被忽略。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回0，有錯誤發生時返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ENOMEM 記憶體不足，無法配置新的環境變數空間<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdlib.h&gt;<br> \
      main()<br> \
      {<br> \
      char * p;<br> \
      if((p=getenv(“USER”)))<br> \
      printf(“USER =%s\n”,p);<br> \
      setenv(“USER”,”test”,1);<br> \
      printf(“USER=%s\n”,getenv(“USEr”));<br> \
      unsetenv(“USER”);<br> \
      printf(“USER=%s\n”,getenv(“USER”));<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> USER = root<br> \
      USER = test<br> \
      USER = (null)<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
',
'getopt_html': ' \
  <tr> \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      getopt（分析命令列參數） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int getopt(int argc,char * const argv[ ],const  \
      char * optstring);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> getopt()用來分析命令列參數。參數argc和argv是由main()傳遞的參數個數和內容。參數optstring  \
      則代表欲處理的選項字串。此函數會返回在argv 中下一個的選項字母，此字母會對應參數optstring 中的字母。如果選項字串裡的字母後接著冒號“:”，則表示還有相關的參數，全域變數optarg  \
      即會指向此額外參數。如果getopt()找不到符合的參數則會印出錯資訊，並將全域變數optopt設為“?”字元，如果不希望getopt()印出錯資訊，則只要將全域變數opterr設為0即可。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果找到符合的參數則返回此參數字母，如果參數不包含在參數optstring 的選項字母則返回“?”字元，分析結束則返回-1。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;stdio.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      int main(int argc,char **argv)<br> \
      {<br> \
      int ch;<br> \
      opterr = 0;<br> \
      while((ch = getopt(argc,argv,”a:bcde”))!= -1)<br> \
      switch(ch)<br> \
      {<br> \
      case ‘a’:<br> \
      printf(“option a:’%s’\n”,optarg);<br> \
      break;<br> \
      case ‘b’:<br> \
      printf(“option b :b\n”);<br> \
      break;<br> \
      default:<br> \
      printf(“other option :%c\n”,ch);<br> \
      }<br> \
      printf(“optopt +%c\n”,optopt);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> $./getopt –b<br> \
      option b:b<br> \
      $./getopt –c<br> \
      other option:c<br> \
      $./getopt –a<br> \
      other option :?<br> \
      $./getopt –a12345<br> \
      option a:’12345’<br> \
      </font> </td> \
  </tr> \
',
'isatty_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      isatty（判斷檔描述詞是否是為終端機） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> ttyname<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int isatty(int desc);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果參數desc所代表的檔描述詞為一終端機則返回1，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果檔為終端機則返回1，否則返回0。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 參考ttyname()。<br> \
      </font> </td> \
  </tr> \
',
'select_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      select（I/O多工機制） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;sys/time.h&gt;<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> int select(int n,fd_set * readfds,fd_set *  \
      writefds,fd_set * exceptfds,struct timeval * timeout);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> select()用來等待檔描述詞狀態的改變。參數n代表最大的檔描述詞加1，參數readfds、writefds  \
      和exceptfds 稱為描述片語，是用來回傳該描述詞的讀，寫或例外的狀況。底下的宏提供了處理這三種描述片語的方式:<br> \
      FD_CLR(inr fd,fd_set* set)；用來清除描述片語set中相關fd 的位<br> \
      FD_ISSET(int fd,fd_set *set)；用來測試描述片語set中相關fd 的位是否為真<br> \
      FD_SET（int fd,fd_set*set）；用來設置描述片語set中相關fd的位<br> \
      FD_ZERO（fd_set *set）； 用來清除描述片語set的全部位元<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 參數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> timeout為結構timeval，用來設置select()的等待時間，其結構定義如下<br> \
      struct timeval<br> \
      {<br> \
      time_t tv_sec;<br> \
      time_t tv_usec;<br> \
      };<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果參數timeout設為NULL則表示select（）沒有timeout。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 錯誤代碼 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 執行成功則返回檔描述詞狀態已改變的個數，如果返回0代表在描述詞狀態改變前已超過timeout時間，當有錯誤發生時則返回-1，錯誤原因存於errno，此時參數readfds，writefds，exceptfds和timeout的值變成不可預測。<br> \
      EBADF 檔描述詞為無效的或該檔已關閉<br> \
      EINTR 此調用被信號所中斷<br> \
      EINVAL 參數n 為負值。<br> \
      ENOMEM 核心記憶體不足<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 常見的程式片段:fs_set readset；<br> \
      FD_ZERO(&readset);<br> \
      FD_SET(fd,&readset);<br> \
      select(fd+1,&readset,NULL,NULL,NULL);<br> \
      if(FD_ISSET(fd,readset){……}<br> \
      </font> </td> \
  </tr> \
',
'ttyname_html': ' \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> <br> \
        </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> <br> \
      ttyname（返回一終端機名稱） </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 相關函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> Isatty<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 表標頭檔 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 定義函數 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> char * ttyname(int desc);<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 函數說明 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果參數desc所代表的檔描述詞為一終端機，則會將此終端機名稱由一字串指標返回，否則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 返回值 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> 如果成功則返回指向終端機名稱的字串指標，有錯誤情況發生時則返回NULL。<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 範例 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> #include&lt;unistd.h&gt;<br> \
      #include&lt;sys/types.h&gt;<br> \
      #include &lt;sys/stat.h&gt;<br> \
      #include&lt;fcntl.h&gt;<br> \
      main()<br> \
      {<br> \
      int fd;<br> \
      char * file = “/dev/tty”;<br> \
      fd = open (fiel,O_RDONLY);<br> \
      printf(“%s”,file);<br> \
      if(isatty(fd)){<br> \
      printf(“is a tty.\n”);<br> \
      printf(“ttyname = %s \n”,ttyname(fd));<br> \
      }<br> \
      else printf(“ is not a tty\n”);<br> \
      close(fd);<br> \
      }<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">  \
      <div align="right"><font face="Trebuchet MS" size="2"> 執行 </font> </div> \
    </td> \
    <td> <font face="Trebuchet MS" size="2"> /dev/tty is a tty<br> \
      ttyname = /dev/tty<br> \
      </font> </td> \
  </tr> \
  <tr>  \
    <td width="80" valign="top">　  \
      <div align="right"><br> \
      </div> \
    </td> \
  </tr> \
'
};