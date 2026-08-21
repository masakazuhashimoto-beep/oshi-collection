console.log('動いた。')

const title = document.querySelector('#site-title')
if (title) {
    title.textContent = 'テーマはなんでもOK！'
}
if (title) {
    (title as HTMLElement).style.color = 'blue'
}

// ボタンとメッセージをhtmlから取得
const btn = document.querySelector('.submit-btn');
const message = document.querySelector('#form-message');
if (btn && message) {
    // クリックしたらテキストが変わる
    btn.addEventListener('click', () => {
        message.textContent = 'クリックしたよ！';
    });
    // マウスオーバーしたらテキストが変わる
    btn.addEventListener('mouseover', () => {
        message.textContent = 'マウスオーバーしたよ！';
    });
    // マウスアウトしたらテキストが変わる
    btn.addEventListener('mouseout', () => {
        message.textContent = 'マウスアウトしたよ！';
    });
}

// いいねボタンをクリックしたらカウントが増える
let count: number = 0;

// いいねボタンとカウントをhtmlから取得
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
console.log('likeBtn:', likeBtn);
console.log('likeCount:', likeCount);

if (likeBtn && likeCount) {
    likeBtn.addEventListener('click', () => {
        count++;
        likeCount.textContent = String(count);
        console.log('カウント:', count);
        // カウントが10になったらメッセージが表示される
        if (count === 10) {
            likeCount.textContent = '10いいね達成！ありがとうございます！';
        }
    });
} else {
    console.error('いいね用の要素が見つかりません');
}

interface Item { title: string; category: string; description: string; quantity: number; }
const items: Item[] = [
    { title: 'テスト1', category: 'カテゴリ1', description: '説明1', quantity: 2 },
    { title: 'テスト2', category: 'カテゴリ2', description: '説明2', quantity: 3 },
    { title: 'テスト3', category: 'カテゴリ3', description: '説明3', quantity: 5 },
];
