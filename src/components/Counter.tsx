'use client';

import { useState, useEffect, useCallback } from 'react';
import { IconButton, Typography, Box, CircularProgress } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box display="flex" gap={2} alignItems="center">
        {/* 加號按鈕 */}
        <IconButton
          onPointerDown={increment} // 手機用 touchstart 減少 100ms 延遲
          color="primary"
          sx={{ touchAction: 'manipulation' }} // 減少觸控延遲
        >
          <Add />
        </IconButton>

        {/* 減號按鈕 */}
        <IconButton
          onPointerDown={decrement}
          color="secondary"
          sx={{ touchAction: 'manipulation' }}
        >
          <Remove />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Counter;


// 觸控延遲減少：
// 使用 onPointerDown 代替 onClick，避免了觸控設備上的 100ms 延遲（因為 onClick 在手機上會等待 touchstart 和 touchend 後的 100ms 手勢判斷）。
// 加上 touch-action: manipulation，進一步告訴瀏覽器只處理點擊，不處理滑動或縮放，減少觸控延遲。