import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Grid,
    Tabs,
    Tab,
    AppBar,
    IconButton,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ap_style from '../CSS/Airplane.module.scss';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import airplane1 from '../assets/airplane/1.jpg';
import airplane2 from '../assets/airplane/2.jpg';
import airplane3 from '../assets/airplane/3.jpg';
import airplane4 from '../assets/airplane/4.jpg';
import airplane5 from '../assets/airplane/5.jpg';
import airplane6 from '../assets/airplane/6.jpg';
import airplane7 from '../assets/airplane/7.jpg';
import airplane8 from '../assets/airplane/8.jpg';
import airplane9 from '../assets/airplane/9.jpg';
import Logo from '../assets/airplane/yeoreum.png';

const HEADER_HEIGHT = 64;
const FOOTER_HEIGHT = 130;
const HERO_HEIGHT = 900;


const airlineOptions = [
    '（松）守破離航空',
    '（キ）キミスカ航空',
    '破壊モード（航空）',
    '（李）ヨルム航空',
    'ヨリソルウレテ航空（願）',
    'ナガンヌ航空（沖）',
    '江戸川コナン航空（爆）',
    'オビンナ航空（新）',
    '安枝航空（28）',
    '全日本空輸（株）',
    '日本航空（株）',
];

const reservations = [
    {
        id: '2567',
        pw: 'amayarin',
        music: 'ウルトラソウル',
        airline: '（李）ヨルム航空'
    },
];

const SearchAirplane: React.FC = () => {
    const [tab, setTab] = useState(0);

    // ステップ管理
    const [step, setStep] = useState(0);

    // 入力値
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [music, setMusic] = useState('');
    const [airline, setAirline] = useState('');

    // エラー管理
    const [error, setError] = useState('');

    // 予約キャンセル表示
    const [showCancel, setShowCancel] = useState(false);

    const handleTabChange = (_: any, newValue: number) => setTab(newValue);

    const handleCancel = () => {
        alert('情報をキャンセルしました');
        setStep(0);
        setId('');
        setPw('');
        setMusic('');
        setAirline('');
        setShowCancel(false);
        setError('');
    };

    // ステップごとのバリデーション
    const handleNext = () => {
        setError('');
        const reservation = reservations[0];
        if (step === 0) {
            if (id === reservation.id) {
                setStep(1);
            } else {
                setError('IDが正しくありません');
            }
        } else if (step === 1) {
            if (pw === reservation.pw) {
                setStep(2);
            } else {
                setError('PWが正しくありません');
            }
        } else if (step === 2) {
            if (music === reservation.music) {
                setStep(3);
            } else {
                setError('好きな音楽が正しくありません');
            }
        } else if (step === 3) {
            if (airline === reservation.airline) {
                setShowCancel(true);
            } else {
                setError('航空会社が正しくありません');
            }
        }
    };

    return (
        <Box
            sx={{
                bgcolor: '#0d223a', // 濃い青背景
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* ヘッダー */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: '#0d223a',
                    color: '#2196f3',
                    borderBottom: '1px solid #1976d2',
                    height: HEADER_HEIGHT + 48,
                    justifyContent: 'flex-start',
                    zIndex: 1300,
                    top: 0,
                    left: 0,
                    right: 0,
                }}
            >
                {/* ヘッダー上段 */}
                <Box sx={{ display: 'flex', alignItems: 'center', px: 3, py: 1, height: HEADER_HEIGHT }}>
                    <img
                        src={Logo}
                        alt="ヨルム航空ロゴ"
                        style={{
                            height: 48,
                            width: 'auto',
                            marginRight: 16,
                            display: 'block'
                        }}
                        draggable={false}
                    />
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 900,
                            color: '#fff',
                            letterSpacing: 4,
                            fontFamily: 'Arial Black, Arial, sans-serif',
                            fontStyle: 'italic',
                            textTransform: 'uppercase',
                            userSelect: 'none',
                            mr: 2,
                            fontSize: { xs: '2.2rem', sm: '2.6rem', md: '2.8rem' },
                        }}
                    >
                        ヨルム航空
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton>
                        <MenuIcon sx={{ color: '#2196f3' }} />
                    </IconButton>
                </Box>

                {/* ナビゲーション下段 */}
                <Box
                    sx={{
                        bgcolor: '#0d223a',
                        borderBottom: '1px solid #1976d2',
                        px: 3,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        flex: '0 0 48px',
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 4, width: '100%' }}>
                        <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 16, cursor: 'pointer', '&:hover': { color: '#2196f3' } }}>トップ</Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 16, cursor: 'pointer', '&:hover': { color: '#2196f3' } }}>国内</Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 16, cursor: 'pointer', '&:hover': { color: '#2196f3' } }}>海外</Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 16, cursor: 'pointer', '&:hover': { color: '#2196f3' } }}>ショッピング＆ライフ</Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 16, cursor: 'pointer', '&:hover': { color: '#2196f3' } }}>マイレージ</Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 16, cursor: 'pointer', '&:hover': { color: '#2196f3' } }}>改善カフェ</Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 16, cursor: 'pointer', '&:hover': { color: '#2196f3' } }}>AIインサイト</Typography>
                    </Box>
                </Box>
            </AppBar>

            {/* 中央スクロール部分 */}
            <Box
                sx={{
                    flex: '1 1 0',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                    //mt: `${HEADER_HEIGHT + 48}px`,
                    mb: `${FOOTER_HEIGHT}px`,
                    minHeight: 0,
                }}
            >
                {/* ヒーローイメージ */}
                <Box
                    sx={{
                        width: '100%',
                        minHeight: HERO_HEIGHT,
                        background: '#e3f2fd', // 明るい青
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        flex: `0 0 auto`
                    }}
                >

                    <div className={ap_style.airplane_bg_scroll} >
                        <div className={ap_style.airplane_bg_scroll_inner}>
                            {[airplane1, airplane2, airplane3, airplane4, airplane5, airplane6, airplane7, airplane8, airplane9].map((src, i) => (
                                <img src={src} alt="" key={i} draggable={false} />
                            ))}
                        </div>
                    </div>
                    {/* テキストBox */}
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mb: 3,
                            zIndex: 1,
                            position: 'relative'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                background: 'rgba(255,255,255,0.98)',
                                borderRadius: 2,
                                boxShadow: 2,
                                px: 4,
                                py: 2,
                                marginTop: 10,
                                marginBottom: -10,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#1976d2',
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    letterSpacing: 2,
                                    fontSize: { xs: '1.1rem', md: '1.5rem' }
                                }}
                            >
                                もっと世界へ、もっと汐留から。
                            </Typography>
                        </Box>
                    </Box>

                    {/* 予約フォームBox */}
                    <Box
                        sx={{
                            flex: '1 1 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 0,
                            overflow: 'hidden',
                            height: HERO_HEIGHT,
                            zIndex: 1,
                        }}
                    >
                        <Paper elevation={4} sx={{
                            p: 4,
                            borderRadius: 4,
                            width: '100%',
                            maxWidth: 1000,
                            height: 550,
                            overflow: 'auto',
                            bgcolor: '#fff',
                            color: '#222',
                        }}>
                            <Tabs
                                value={tab}
                                onChange={handleTabChange}
                                centered
                                sx={{
                                    mb: 1,
                                    '& .MuiTab-root': {
                                        color: '#222',
                                    },
                                    '& .Mui-selected': {
                                        color: '#1976d2 !important',
                                    },
                                    '& .MuiTabs-indicator': {
                                        backgroundColor: '#1976d2',
                                    },
                                }}
                            >
                                <Tab label="予約" sx={{ fontWeight: tab === 0 ? 700 : 400 }} />
                                <Tab label="運航状況" />
                                <Tab label="国際線予約確認" />
                                <Tab label="海外ツアー予約確認" />
                                <Tab label="チェックイン" />
                                <Tab label="領収書" />
                            </Tabs>
                            <Box sx={{ display: 'flex', gap: 2, mb: 2, borderBottom: '1px solid #1976d2', pb: 0.5, marginTop: 3 }}>
                                <Typography sx={{ color: '#1976d2', fontWeight: 700, pb: 0.5 }}>航空券</Typography>
                                <Typography sx={{ color: '#888' }}>航空券＋宿泊</Typography>
                                <Typography sx={{ color: '#888' }}>特典航空券</Typography>
                                <Typography sx={{ color: '#888' }}>ホテル</Typography>
                                <Typography sx={{ color: '#888' }}>レンタカー</Typography>
                            </Box>

                            <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto', mt: 6 }}>
                                <Grid container spacing={2} direction="column">
                                    {step === 0 && (
                                        <Grid item>
                                            <TextField
                                                label="ID"
                                                fullWidth
                                                value={id}
                                                onChange={e => setId(e.target.value)}
                                                placeholder="例：user1"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#1976d2',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: '#1976d2',
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#1976d2',
                                                    },
                                                    '& input::placeholder': {
                                                        color: '#c0c0c0',
                                                        opacity: 1,
                                                    },
                                                }}
                                                InputProps={{
                                                    sx: {
                                                        fontSize: '1rem',
                                                        height: 60,
                                                        color: '#222',
                                                        background: '#fff',
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: { fontSize: '0.95rem', color: '#1976d2' }
                                                }}
                                            />
                                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{
                                                        px: 4,
                                                        py: 1,
                                                        fontSize: '1rem',
                                                        bgcolor: '#1976d2',
                                                        color: '#fff',
                                                        borderRadius: 8,
                                                        boxShadow: 2,
                                                        '&:hover': { bgcolor: '#1565c0' }
                                                    }}
                                                >
                                                    次へ
                                                </Button>
                                            </Box>
                                        </Grid>
                                    )}
                                    {step === 1 && (
                                        <Grid item>
                                            <TextField
                                                label="PW"
                                                type="password"
                                                fullWidth
                                                value={pw}
                                                onChange={e => setPw(e.target.value)}
                                                placeholder="例：pass1"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#1976d2',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: '#1976d2',
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#1976d2',
                                                    },
                                                    '& input::placeholder': {
                                                        color: '#c0c0c0',
                                                        opacity: 1,
                                                    },
                                                }}
                                                InputProps={{
                                                    sx: {
                                                        fontSize: '1rem',
                                                        height: 60,
                                                        color: '#222',
                                                        background: '#fff',
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: { fontSize: '0.95rem', color: '#1976d2' }
                                                }}
                                            />
                                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{
                                                        px: 4,
                                                        py: 1,
                                                        fontSize: '1rem',
                                                        bgcolor: '#1976d2',
                                                        color: '#fff',
                                                        borderRadius: 8,
                                                        boxShadow: 2,
                                                        '&:hover': { bgcolor: '#1565c0' }
                                                    }}
                                                >
                                                    次へ
                                                </Button>
                                            </Box>
                                        </Grid>
                                    )}
                                    {step === 2 && (
                                        <Grid item>
                                            <TextField
                                                label="好きな音楽"
                                                fullWidth
                                                value={music}
                                                onChange={e => setMusic(e.target.value)}
                                                placeholder="例：J-POP"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#1976d2',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: '#1976d2',
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#1976d2',
                                                    },
                                                    '& input::placeholder': {
                                                        color: '#c0c0c0',
                                                        opacity: 1,
                                                    },
                                                }}
                                                InputProps={{
                                                    sx: {
                                                        fontSize: '1rem',
                                                        height: 60,
                                                        color: '#222',
                                                        background: '#fff',
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: { fontSize: '0.95rem', color: '#1976d2' }
                                                }}
                                            />
                                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{
                                                        px: 4,
                                                        py: 1,
                                                        fontSize: '1rem',
                                                        bgcolor: '#1976d2',
                                                        color: '#fff',
                                                        borderRadius: 8,
                                                        boxShadow: 2,
                                                        '&:hover': { bgcolor: '#1565c0' }
                                                    }}
                                                >
                                                    次へ
                                                </Button>
                                            </Box>
                                        </Grid>
                                    )}
                                    {step === 3 && (
                                        <Grid item>
                                            <TextField
                                                label="航空会社"
                                                select
                                                fullWidth
                                                value={airline}
                                                onChange={e => setAirline(e.target.value)}
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#1976d2',
                                                        },
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: '#1976d2',
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: '#1976d2',
                                                    },
                                                }}
                                                InputProps={{
                                                    sx: {
                                                        fontSize: '1rem',
                                                        height: 60,
                                                        color: '#222',
                                                        background: '#fff',
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: { fontSize: '0.95rem', color: '#1976d2' }
                                                }}
                                            >
                                                {airlineOptions.map(option => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{
                                                        px: 4,
                                                        py: 1,
                                                        fontSize: '1rem',
                                                        bgcolor: '#1976d2',
                                                        color: '#fff',
                                                        borderRadius: 8,
                                                        boxShadow: 2,
                                                        '&:hover': { bgcolor: '#1565c0' }
                                                    }}
                                                >
                                                    次へ
                                                </Button>
                                            </Box>
                                        </Grid>
                                    )}
                                    {error && (
                                        <Grid item>
                                            <Typography sx={{ color: '#d32f2f', fontWeight: 500, textAlign: 'center' }}>{error}</Typography>
                                        </Grid>
                                    )}
                                    {showCancel && (
                                        <Grid item>
                                            <Typography sx={{ mb: 1, fontWeight: 600, color: '#1976d2', fontSize: '1rem', textAlign: 'center' }}>
                                                予約が見つかりました。キャンセルしますか？
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Button
                                                    variant="outlined"
                                                    onClick={handleCancel}
                                                    sx={{
                                                        px: 4,
                                                        py: 1,
                                                        fontSize: '1rem',
                                                        borderRadius: 8,
                                                        color: '#1976d2',
                                                        borderColor: '#1976d2',
                                                        '&:hover': { bgcolor: '#1976d2', color: '#fff', borderColor: '#1976d2' }
                                                    }}
                                                >
                                                    キャンセル
                                                </Button>
                                            </Box>
                                        </Grid>
                                    )}
                                </Grid>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>

            {/* フッター */}
            <Box
                component="footer"
                sx={{
                    bgcolor: '#0d223a',
                    color: '#fff',
                    py: 3,
                    px: 2,
                    textAlign: 'center',
                    borderTop: '1px solid #1976d2',
                    height: `${FOOTER_HEIGHT}px`,
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 1 }}>
                    <Typography
                        component="a"
                        href="#"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: 15,
                            '&:hover': { textDecoration: 'underline', color: '#2196f3' }
                        }}
                    >
                        会社情報
                    </Typography>
                    <Typography
                        component="a"
                        href="#"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: 15,
                            '&:hover': { textDecoration: 'underline', color: '#2196f3' }
                        }}
                    >
                        サイトマップ
                    </Typography>
                    <Typography
                        component="a"
                        href="#"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: 15,
                            '&:hover': { textDecoration: 'underline', color: '#2196f3' }
                        }}
                    >
                        プライバシーポリシー
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 1 }}>
                    <IconButton size="small" sx={{ color: '#2196f3' }}><FacebookIcon fontSize="inherit" /></IconButton>
                    <IconButton size="small" sx={{ color: '#2196f3' }}><TwitterIcon fontSize="inherit" /></IconButton>
                    <IconButton size="small" sx={{ color: '#2196f3' }}><InstagramIcon fontSize="inherit" /></IconButton>
                </Box>
                <Typography sx={{ fontSize: 13, color: '#2196f3' }}>
                    © 2025 Yeoreum Airlines. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );


};

export default SearchAirplane;