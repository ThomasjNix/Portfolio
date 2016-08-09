/*

Tool to convert HTML to Javascript Ready document.write tags:
http://javascript.about.com/library/tools/bldocwriter.htm

*/



/*
if (navigator.appName.indexOf("Microsoft") != -1) {
document.write('<link rel="stylesheet" type="text/css" href="../media/css/ie_styles2.css">');
}
else {
document.write('<link rel="stylesheet" type="text/css" href="../media/css/ns_styles2.css">');
}
*/




/* ------- Template tools: PrintPage and EmailPage ----------------------------------- */
function template_tools() {

/*
d=document
d.write('<a href="http://info.uncc.edu/printpage/" target="_pop" onClick="window.open(\'http://info.uncc.edu/printpage/?page=\'+ lo');
d.write('cation.href,\'new\', \'toolbar=no,resizable=yes,scrollbars=yes,left=0,top=0,screenX=0,screenY=0,width=700,height=550\'); ret');
d.write('urn false;"><img src="http://webweaver.uncc.edu/images/tools/print.gif" alt="Print this Page (Print Safe Version)" width');
d.write('="20" height="20" border="0" name="printpage"></a> ');
*/

/*
d.write('<a href="http://info.uncc.edu/emailpage/" target="_pop" onClick=');
d.write('"window.open(\'http://info.uncc.edu/emailpage/?page=\'+ location.href,\'new\', \'toolbar=no,resizable=yes,scrollbars=yes,left');
d.write('=0,top=0,screenX=0,screenY=0,width=500,height=550\'); return false;"><img src="http://webweaver.uncc.edu/images/tools/ema');
d.write('il.gif" alt="Email this Page" width="20" height="20" border="0" name="emailpage"></a>');
*/

}


/* ----- Year for Copyright ------------------------ */
function copyright_year() {
document.write("2005 ");
}



/* ----------------------------------------------------------- */
function break_out_of_frames() {
	if (parent.frames.length > 0) {parent.location.href = self.document.location;}
}



/* ----------------------------------------------------------- */
function PageLastUpdated() {
	if (document.lastModified){	document.write("Page Last Updated: " + document.lastModified);}
}

/* ----------------------------------------------------------- */
function quicklinks() {
var d=document
d.write ("<form name='quicklinks' action=''>");
d.write ("<select name='quicklinks' id='quicklinks' onChange=MM_jumpMenu('parent',this,0) class='quicklink_dropdown'>");
d.write ("<option value='http://info.uncc.edu/redirect/?p=quicklinks' selected='true'>Quick Links - .........</option>");
d.write ("<option value='#'>------------------------------------</option>");
d.write ("<option value='http://search.uncc.edu/people/?p=campusnumbers'>Campus Phone Numbers</option>");
d.write ("<option value='#'>------------------------------------</option>");
d.write ("<option value='http://www.uncc.edu/constituents/future-students/index.html#academics'>Academics </option>");
d.write ("<option value='http://www.uncc.edu/constituents/future-students/index.html#admissions'>Admissions </option>");
d.write ("<option value='http://www.uncc.edu/auxsrvcs/bookstore/book.htm'>Bookstore</option>");
d.write ("<option value='http://www.uncc.edu/public_relations/newsletter/index.html'>Campus News(Green Sheet)</option>");
d.write ("<option value='http://www.provost.uncc.edu/academic_affairs/catalogs/2003-2005_Catalog/index-2003-05.htm'>Catalog</option>");
d.write ("<option value='http://www.ceesp.uncc.edu/'>Continuing Ed</option>");
d.write ("<option value='https://csrv02nt.uncc.edu/ia-bin/tsrvweb.exe?tserve_trans_config=rclsterm.cfg&tserve_host_code=HostZero&tserve_tiphost_code=TipZero'>Course Schedule</option>");
d.write ("<option value='http://www.uncc.edu/humanres_is/jobs.asp'>Employment Opportunities</option>");
d.write ("<option value='http://www.legal.uncc.edu'>General Counsel</option>");
d.write ("<option value='http://www.uncc.edu/develop/givenow.htm'>Giving to the University</option>");
d.write ("<option value='http://www.uncc.edu/housing/'>Housing and Residence Life</option>");
d.write ("<option value='http://www.uncc.edu/health_svcs/'>Health Services</option>");
d.write ("<option value='http://www.uncc.edu/its/'>Information & Technology Services</option>");
d.write ("<option value='http://www.library.uncc.edu/'>Library</option>");
d.write ("<option value='http://www.uncc.edu/dos/offcampus/'>Off Campus Student Services</option>");
d.write ("<option value='http://www.parking.uncc.edu/'>Parking Services</option>");
d.write ("<option value='http://www.uncc.edu/police/'>Police and Public Safety</option>");
d.write ("<option value='http://www.legal.uncc.edu/policies/'>Policy Statements</option>");
d.write ("<option value='http://www.uncc.edu/public_relations/'>Press Releases</option>");
d.write ("<option value='http://www.uncc.edu/registrar/'>Records & Registration</option>");
d.write ("<option value='http://www.safety.uncc.edu'>Safety & Environmental Health Office</option>");
d.write ("<option value='http://www.uncc.edu/spotlight_spring2003.html'>Spotlight on Research Series</option>");
d.write ("<option value='http://www.uncc.edu/indexe.htm'>Student Information</option>");
//d.write ("<option value='https://csrv02nt.uncc.edu/ia-bin/tsrvweb.exe?tserve_trans_config=ahomepg.cfg&tserve_host_code=HostZero&tserve_tiphost_code=TipZero'>Student Services</option>");
d.write ("<option value='http://www.uncc.edu/summer/'>Summer Programs</option>");
d.write ("<option value='http://www3.uncc.edu/finance/Tuitionandfees.htm'>Tuition and Fees</option>");
d.write ("<option value='http://www.ucae.uncc.edu/tssi/'>Tutorial Services</option>");
d.write ("<option value='http://www.uncc.edu/public_relations/magazine/'>UNC Charlotte Magazine</option>");
d.write ("<option value='#'>------------------------------------</option>");
d.write ("<option value='http://www.uncc.edu/'>UNC Charlotte Home Page</option>");
d.write ("<option value='#'>------------------------------------</option>");
d.write ("<option value='http://info.uncc.edu/redirect/?p=quicklinks'>Quicklinks Page</option>");
d.write ("</select>");
d.write ("</form>")
}
/* ----------------------------------------------------------- */
function MM_jumpMenu(targ,selObj,restore){
eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
if (restore) selObj.selectedIndex=0;
}
/* ----------------------------------------------------------- */
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
/* ----------------------------------------------------------- */
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
/* -----------Display Citation Months in Menu------------------------------- */
function getCiteMonths(){
document.write("<select size='1' name='citemonth'>");
document.write("<option value='Month'>Month</option>");
for(i=1; i<13; i++)
{
document.write("<option value='" +i+ "'>" +i+ "</option>");
}
document.write("</select>");
}

/* -----------Display Expiration Months in Menu------------------------------- */
function getExpMonths(){
document.write("<select size='1' name='expmonth'>");
document.write("<option value='Month'>Month</option>");
for(i=1; i<13; i++)
{
document.write("<option value='" +i+ "'>" +i+ "</option>");
}
document.write("</select>");
}
/* -----------Display Citation Days in Menu------------------------------- */
function getCiteDays(){
document.write("<select size='1' name='day'>");
document.write("<option value='Day'>Day</option>");
for(i=1; i<32; i++)
{
document.write("<option value=" +i+ ">" +i+ "</option>");
}
document.write("</select>");
}
/* -----------Display Citation Years in Menu------------------------------- */
function getCiteYears(){
document.write("<select size='1' name='year'>");
document.write("<option value='Year'>Year</option>");
var d = new Date();
currentyear = d.getFullYear();
for(i=5; i>=0; i--){
year = currentyear - i;
document.write("<option value=" +year+ ">" +year+ "</option>");
}
document.write("</select>");
}
/* -----------Display Expiration Years in Menu------------------------------- */
function getExpYears(){
document.write("<select size='1' name='year'>");
document.write("<option value='Year'>Year</option>");
var d = new Date();
currentyear = d.getFullYear();
while(i<16)
{
year = currentyear + i;
document.write("<option value=" +year+ ">" +year+ "</option>");
i++
}
document.write("</select>");
}

/* -----------Display Advisory------------------------------- */
function DisplayAdvisory(advisory) {

if (advisory == 1)
{
document.write("<table width='100%' border='0' cellspacing='0' cellpadding='2' style='border-top: 1px solid black; border-right: 1px solid black; border-left: 1px solid black' >");
document.write("<tr><td bgcolor='#FF0000' align='center' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px; font-weight:bold'><a class='advisory' href='../trafficadvisory.htm'>Special Event Traffic Advisory...Click Here For More Information</a></td></tr></table>");
}}

/* ----------------Price Table-------------------------------- */

function PriceTable(){
d=document
var type = new Array("Commuter Permit (full year)","Faculty & Staff Permit (full year)","Motorcycle Permit","Resident Permit (full year)","Spring Permit","Part-time Faculty/Staff (full year)","Summer Permit (both sessions)","Part-time Faculty/Staff (per semester)","Gate Cards (full year)<span style='color:red;font-size:13px;'>*</span>","Summer Permit (one session)","Night Permit (per semester)","Additional Vehicles","Gate Cards (January)","Replacement Permit<span style='color:red;font-size:13px;'>**</span>","Replacement Permit (with return only)","Temporary Permits (per day)")
var price = new Array("$250.00","$250.00","$250.00","$250.00","$154.00","$126.00","$101.00","$63.00","$40.00","$56.00","$50.00","$15.00","$20.00","$10.00","$5.00","$3.00")
d.write("<table class='price'>");
d.write("<tr><td colspan='2' align='center' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px; color:green; font-weight:bold'>Permit Prices for 2005-2006</td></tr>")
d.write("<tr><td colspan='2' align='center' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:11px; color:green'>(Valid August 15, 2005 through August 15, 2006)</td></tr>")
d.write("<tr><td colspan='2' align='center' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:10px; color:red'>Prices are subject to change without notice</td></tr>")
d.write("<tr><td colspan='2'><hr></td></tr>")
for (i=0; i<16; i++)
{
d.write("<tr><td class='price'>"+type[i]+"</td>")
d.write("<td class='number'>"+price[i]+"</td></tr>")
}
d.write("<tr><td colspan='2'><hr></td></tr>")
d.write("<tr><td colspan='2' align='left' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:10px; color:red;'>* For faculty and staff only</td></tr>")
d.write("<tr><td colspan='2' align='left' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:10px; color:red;'>** For lost or stolen permits only; an affidavit must be signed by owner in person</td></tr>")
d.write("<tr><td colspan='2' align='left' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:10px; color:green;'>Payment by payroll deductions is available for permanent UNC Charlotte employees from September 15 until May 31</td></tr>")
d.write("</table>");
}
/* ----------------Breadcrumb-------------------------------- */
function Breadcrumb(){
document.write("<a href='http://www.uncc.edu/' class='breadcrumbnav'>Home</a>")
document.write("<img src='../Images/breadcrumb_divider.gif' alt='' style='vertical-align:middle;' width='20px' height='15px' /><a href='../index.asp'>Parking Services</a>")
document.write("<img src='../Images/breadcrumb_divider.gif' alt='' style='vertical-align:middle;' width='20px' height='15px' />" +document.body.id+ "</td></tr>")
}

/* ----------------Suggestion Box Validation-------------------------------- */
function validate(request){
	if (request.SuggestionsOrComments.value == "")
	{window.alert("Please include a suggestion or comment.");
	request.SuggestionsOrComments.focus();
	return false;}
	
	if (request.Email.value == "")
	{window.alert("Please enter a valid E-mail address.");
       request.Email.focus();
       return false;
	}}
/* ----------------FAQ Validation-------------------------------- */
function faqvalidate(faqform){
	if (faqform.Question.value == "")
	{window.alert("Please include a question or suggestion.");
	faqform.Question.focus();
	return false;}
	if (faqform.Email.value != ""){
		if (faqform.Email.value.indexOf("@")==-1)
		{window.alert("Please enter a valid E-mail address.");
       	faqform.Email.focus();
       	return false;
		}
		if (faqform.Email.value.indexOf(".")==-1)
		{
		window.alert("Please enter a valid E-mail address.");
		faqform.Email.focus();
		return false;
	}}}
/* ------------XHTML Validator------------------ */
function XHTMLvalidate(){
	document.write("<a href='http://validator.w3.org/check? uri=http%3A%2F%2Fwww.uncc.edu%2Fparking%2Fperpri.asp'>");
	document.write("<img style='border:0;width:88px;height:31px'");
	document.write("src='../Images/htmlvalidate.bmp' alt='Valid XHTML 1.0!' /></a>");
}
/* -------------CSS Validator------------------ */
function CSSvalidate(){
	document.write("<a href='http://jigsaw.w3.org/css-validator/check?uri=referer'>");
	document.write("<img style='border:0;width:88px;height:31px'");
	document.write("src='../Images/cssvalidate.bmp' alt='Valid CSS!' /></a>");
}

/*--------------Citation Amounts--------------------------------------------*/
function CiteTable(){
d=document
var cite = new Array("Improper display of permit","Line straddling","Parking in a non-parking area","Parking in an improper area for permit","Meter time violation","Parking on the grass","Parking without a valid permit","Blocking traffic","Registration violation","Parking at yellow curb","Moving violation civil penalty<span style='color:red; font-size:13px;'>*</span>","Parking in a tow-away zone","Parking in a space marked 'Reserved'","Parking in a space or accessibility ramp reserved for disabled","False registration (Article VI, Section 3)")
var citeprice = new Array("$10.00","$20.00","$20.00","$20.00","$20.00","$30.00","$40.00","$40.00","$40.00","$40.00","$50.00","$60.00","$60.00","$100.00","$100.00")
d.write("<p style='text-align:center;'><table class='price'>");
d.write("<tr><td colspan='2' align='center' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px; color:green; font-weight:bold'>Citations Enforced and Penalties</td></tr>")
d.write("<tr><td colspan='2'><hr /></td></tr>")
for (i=0; i<15; i++)
{
d.write("<tr><td class='price'>"+cite[i]+"</td>")
d.write("<td class='number'>"+citeprice[i]+"</td></tr>")
}
d.write("<tr><td colspan='2'><hr /></td></tr>")
d.write("<tr><td colspan='2' align='left' style='font-family:Verdana, Arial, Helvetica, sans-serif; font-size:10px; color:red'>*Alleged moving violations may result in a citation to District Court, Mecklenburg County, as prescribed by North Carolina State Law</td></tr>")
d.write("</table></p>");
}
/*--------------Navigation--------------------------------------------*/
var startList
startList = function(){
	if(document.all&&document.getElementById){
		navRoot = document.getElementById("nav");
		for(i=0; i<navRoot.childNodes.length; i++){
			node = navRoot.childNodes[i];
			if(node.nodeName=="LI"){
				node.onmouseover=function(){
					this.className +=" over";
					}
					node.onmouseout=function(){
						this.className=this.className.replace(" over", "");
					}
			}
		}
	}
}
window.onload=startList;


  // this function is needed to work around 
  // a bug in IE related to element attributes
  function hasClass(obj) {
     var result = false;
     if (obj.getAttributeNode("class") != null) {
         result = obj.getAttributeNode("class").value;
     }
     return result;
  }   

function dual_stripe(id1, id2) {
	stripe(id1, '#fff', '#C9EEBB');
	stripe(id2, '#fff', '#C9EEBB');
}

 function stripe(id) {

    // the flag we'll use to keep track of 
    // whether the current row is odd or even
    var even = false;
  
    // if arguments are provided to specify the colours
    // of the even & odd rows, then use the them;
    // otherwise use the following defaults:
    var evenColor = arguments[1] ? arguments[1] : "#fff";
    var oddColor = arguments[2] ? arguments[2] : "#eee";
  
    // obtain a reference to the desired table
    // if no such table exists, abort
    var table = document.getElementById(id);
    if (! table) { return; }
    
    // by definition, tables can have more than one tbody
    // element, so we'll have to get the list of child
    // &lt;tbody&gt;s 
    var tbodies = table.getElementsByTagName("tbody");

    // and iterate through them...
    for (var h = 0; h < tbodies.length; h++) {
    
     // find all the &lt;tr&gt; elements... 
      var trs = tbodies[h].getElementsByTagName("tr");
      
      // ... and iterate through them
      for (var i = 0; i < trs.length; i++) {

        // avoid rows that have a class attribute
        // or backgroundColor style
        if (! hasClass(trs[i]) &&
            ! trs[i].style.backgroundColor) {
 		  
          // get all the cells in this row...
          var tds = trs[i].getElementsByTagName("td");
        
          // and iterate through them...
          for (var j = 0; j < tds.length; j++) {
        
            var mytd = tds[j];

            // avoid cells that have a class attribute
            // or backgroundColor style
            if (! hasClass(mytd) &&
                ! mytd.style.backgroundColor) {
        
              mytd.style.backgroundColor =
                even ? evenColor : oddColor;
            
            }
          }
        }
        // flip from odd to even, or vice-versa
        even =  ! even;
      }
    }
	startList();
  }
var startList
startList = function() {
	if (document.all&&document.getElementById) {
		navRoot = document.getElementById("nav");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}
  //END