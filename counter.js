jQuery(document).ready(function() {
  jQuery.ajax({
    url: 'vendor/ajax-counter/counter.php', // counter.php への絶対パス．
    cache: false,
    dataType: 'json',
    success: function(res) {
      // アクセス数の出力フォーマットは append() 内で定義している．
      // jQuery(".counter").append('累計&ensp;'+res.total+'&ensp;今日&ensp;'+res.today+'&ensp;昨日&ensp;'+res.yesterday);
      jQuery(".counter-total").append(res.total);
    }
  });
});