-- 코드를 입력하세요
SELECT b.book_id, a.author_name, date_format(b.published_date, '20%y-%m-%d') from author a, book b where b.author_id = a.author_id and b.category = "경제" order by b.published_date asc;