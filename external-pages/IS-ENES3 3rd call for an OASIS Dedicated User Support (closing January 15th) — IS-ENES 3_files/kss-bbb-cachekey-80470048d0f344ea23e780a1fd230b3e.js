
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - kss-bbb.js - */
// https://is.enes.org/portal_javascripts/kss-bbb.js?original=1
(function($){$(function(){if(typeof($('body').attr('data-portal-url'))!=='undefined'&&typeof($('body').attr('data-base-url'))!=='undefined'){return}
$('body').attr('data-portal-url',portal_url);$('body').attr('data-base-url',base_url)});
function refreshPortlet(hash,_options){var options={data:{},success: function(){},error: function(){},ajaxOptions:{}};$.extend(options,_options);options.data.portlethash=hash;ajaxOptions=options.ajaxOptions;ajaxOptions.url=$('body').attr('data-base-url')+'/@@render-portlet';ajaxOptions.success=function(data){var container=$('[data-portlethash="'+hash+'"]');var portlet=$(data);container.html(portlet);options.success(data,portlet)}
ajaxOptions.error=function(){options.error()}
ajaxOptions.data=options.data;$.ajax(ajaxOptions)}
function applyPortletTimeout(portlet){var timeout=portlet.data('timeout');if(timeout==undefined){timeout=30}else{timeout=parseInt(timeout)}
timeout=timeout * 1000;setTimeout($.proxy(function(){refreshPortlet(this.parents('.portletWrapper').data('portlethash'),{success: function(data,portlet){apply_timeout(portlet)}})},portlet),timeout)}
$(document).ready(function(){var spinner=$('<div id="ajax-spinner"><img src="'+portal_url+'/spinner.gif" alt=""/></div>');spinner.appendTo('body').hide();$(document).ajaxStart(function(){spinner.show()});$(document).ajaxStop(function(){spinner.hide()});$('body').delegate('#calendar-next,#calendar-previous','click', function(e){e.preventDefault();var el=$(this);var container=el.parents('.portletWrapper');refreshPortlet(container.data('portlethash'),{data:{month:el.data('month'),year:el.data('year')}});return false});$('.kssPortletRefresh,.refreshPortlet').each(function(){applyPortletTimeout($(this))});$('.portlet-deferred').each(function(){refreshPortlet($(this).parents('.portletWrapper').data('portlethash'))});
function updateSharing(data){var sharing=data.body;var messages=$(data.messages).filter(function(){return this.tagName=='DL'});$('.portalMessage').remove();$('#user-group-sharing').replaceWith(sharing);$('#content').prepend(messages)}
var search_timeout=null;$('#content-core').delegate('#sharing-user-group-search','input', function(){var text=$(this);if(search_timeout!=null){clearTimeout(search_timeout)}
if(text.val().length>3){search_timeout=setTimeout($.proxy(function(){$('#sharing-search-button').trigger('click')},text),300)}});$('#content-core').delegate('#sharing-search-button','click', function(){$.ajax({url:$('body').attr('data-base-url')+'/@@updateSharingInfo',data:{search_term:$('#sharing-user-group-search').val(),'form.button.Search':'Search'},type:'GET',dataType:'json',success:updateSharing});return false});$('#content-core').delegate('#sharing-save-button','click', function(){var btn=$(this);var form=btn.parents('form');var data=form.serializeArray();data.push({name:'form.button.Save',value:'Save'});$.ajax({url:$('body').attr('data-base-url')+'/@@updateSharingInfo',data:data,type:'POST',dataType:'json',success:updateSharing});return false})})})(jQuery);

/* - inline_validation.js - */
// https://is.enes.org/portal_javascripts/inline_validation.js?original=1
jQuery(function($){var render_error=function($field,errmsg){var $errbox=$('div.fieldErrorBox',$field);if(errmsg!==''){$field.addClass('error');$errbox.html(errmsg)} else{$field.removeClass('error');$errbox.html('')}};$(document).on('blur','.field input.blurrable, '+'.field select.blurrable, '+'.field textarea.blurrable',
function(){var $input=$(this),$field=$input.closest('.field'),uid=$field.attr('data-uid'),fname=$field.attr('data-fieldname'),$form=$field.closest('form'),url='',index=-1,value=$input.val();if($input.attr('multiple')==='multiple'&&value===null){value=$([]).serialize()}
params=$.param({uid:uid,fname:fname,value:value},traditional=true);if($field&&uid&&fname){url=$form.attr('action');index=url.lastIndexOf('/');if(index>-1&&url.lastIndexOf('edit')>index){url=url.slice(0,index)}
$.post(url+'/at_validate_field',params, function(data){if(data.errmsg===undefined){return};render_error($field,data.errmsg)})}});var formlib_validate_field=function(input){var $input=$(input),$field=$input.closest('.field'),$form=$field.closest('form'),fname=$field.attr('data-fieldname');$form.ajaxSubmit({url:$form.attr('action')+'/@@formlib_validate_field',data:{fname:fname},iframe:false,success: function(data){render_error($field,data.errmsg)},dataType:'json'})};$(document).on('blur','.formlibInlineValidation input[type="text"], '+'.formlibInlineValidation input[type="password"], '+'.formlibInlineValidation input[type="checkbox"], '+'.formlibInlineValidation input[type="radio"], '+'.formlibInlineValidation select, '+'.formlibInlineValidation textarea',
function(){formlib_validate_field(this)});var z3cform_validate_field=function(input){var $input=$(input),$field=$input.closest('.field'),$form=$field.closest('form'),fset=$input.closest('fieldset').attr('data-fieldset'),fname=$field.attr('data-fieldname');if(fname){$form.ajaxSubmit({url:$form.attr('action')+'/@@z3cform_validate_field',data:{fname:fname,fset:fset},iframe:false,success: function(data){render_error($field,data.errmsg)},dataType:'json'})}};$(document).on('blur','.z3cformInlineValidation input[type="text"], '+'.z3cformInlineValidation input[type="password"], '+'.z3cformInlineValidation input[type="checkbox"], '+'.z3cformInlineValidation input[type="radio"], '+'.z3cformInlineValidation select, '+'.z3cformInlineValidation textarea',
function(){z3cform_validate_field(this)})});

/* - ++resource++dropdown-menu.js - */
// https://is.enes.org/portal_javascripts/++resource++dropdown-menu.js?original=1
jQuery(function($){$('#portal-globalnav .noClick').click(function(e){e.preventDefault()})});
