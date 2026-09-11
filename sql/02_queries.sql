insert into items (title, category, desciption)
values ('推し①', 'カテゴリA', '説明'),
       ('推し②', 'カテゴリA', '説明'),
       ('推し③', 'カテゴリB', '説明');
commit;

select * from items -- where category = 'カテゴリA';
select title, description from items;
select * from items where category = 'カテゴリA'
select * from items order by title asc;

select title, description from items
where category = 'カテゴリA'
order by title asc;

select items.title, comment.body, comment.stars
from items
join comment on comment.item_id = item_id;