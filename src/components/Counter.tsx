'use client';

import { useState, useEffect, useCallback } from 'react';
import { IconButton, Typography, Box, CircularProgress } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const increment = useCallback(async (e:
    React.MouseEvent<HTMLButtonElement> |
    React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 防止觸控觸發其他手勢
    if (isProcessing) return; // 避免重複觸發
    setIsProcessing(true);
    const prevCount = count;
    await sleep(500);
    setCount(prev => prev + 1);
    if (prevCount === count) {
      setIsProcessing(false);
    }
  }, [count, isProcessing]);

  const decrement = useCallback(async (e:
    React.MouseEvent<HTMLButtonElement> |
    React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isProcessing) return;
    setIsProcessing(true);
    const prevCount = count;
    await sleep(500);
    setCount(prev => prev - 1);
    if (prevCount === count) {
      setIsProcessing(false);
    }
  }, [count, isProcessing]);

  // 監聽 count 的變更來更新 disabled 狀態
  useEffect(() => {
    setIsProcessing(false);
  }, [count]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box display="flex" gap={2} alignItems="center">
        {/* 加號按鈕 */}
        <IconButton
          onTouchStart={increment} // 手機用 touchstart 減少 100ms 延遲
          onClick={increment} // 桌面仍用 onClick
          color="primary"
          disabled={isProcessing}
          disableRipple // 關閉波紋效果，減少渲染負擔
          sx={{ touchAction: 'manipulation' }} // 減少觸控延遲
        >
          {isProcessing ? <CircularProgress size={24} /> : <Add />}
        </IconButton>

        {/* 減號按鈕 */}
        <IconButton
          onTouchStart={decrement}
          onClick={decrement}
          color="secondary"
          disabled={isProcessing}
          disableRipple
          sx={{ touchAction: 'manipulation' }}
        >
          {isProcessing ? <CircularProgress size={24} /> : <Remove />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Counter;