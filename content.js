button.addEventListener('click', async () => {
    const samples = [];

    // 入力例と出力例を直接取得
    const inputSamples = document.querySelectorAll(
        '#task-statement pre[id^="pre-sample"]'
    );

    if (inputSamples.length === 0) {
        alert('サンプルがありません');
        return;
    }

    // pre-sample0, pre-sample1, ... の順番で取得
    inputSamples.forEach((pre, index) => {
        samples.push(pre.textContent.trim());
    });

    const text = samples.join('\n\n');

    try {
        await navigator.clipboard.writeText(text);
        alert('サンプルを全部コピーしました！');
    } catch (e) {
        console.error(e);
        alert('コピーに失敗しました');
    }
});