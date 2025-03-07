# Захват кадра Stellaris через Nsight

Графических бэкэнд стеллариса основан на OpenGL (хотя в 4.0 обещают перейти на вулкан).

1. Отрисовка фона начинается с отрисовки скайбокса
![stell](https://github.com/user-attachments/assets/cc6795af-cd53-4359-ac12-5cb91aca464c)

2. Большие модульные модели отрисовываются по частям
![stell_000](https://github.com/user-attachments/assets/ef0cd851-5ad0-492a-b667-f97082efc0a2)
![stell_001](https://github.com/user-attachments/assets/51614d4d-48f8-479c-97f4-9aabc4550493)

4. Интересна отрисовка звезды в системе. Основа отрисовывается просто как сфера с текстурой
![stell_002](https://github.com/user-attachments/assets/affdd0ec-ac0d-47eb-b442-25a65cc3172d)

5. Для отрисовки "атмосферы" звезды используется сфера по-больше, для которой фрагментный шейдер накладывает шум Воронова
![stell_003](https://github.com/user-attachments/assets/dc001e44-6e0d-4f07-b914-04b47ac163cf)


7. Коронарные выбросы представляют собой 2D текстуры, отрисованные как модели из 4 вершин
![stell_004](https://github.com/user-attachments/assets/0b896af8-6f34-4fd9-8a7c-dd0243847eaa)
![stell_005](https://github.com/user-attachments/assets/20375993-39c0-47bc-9d22-2961467bc1d9)
![stell_006](https://github.com/user-attachments/assets/dd1596e7-3960-420c-aee2-8305770d2c41)

9. В отдельных буфферах отрисовываются кадры после постобработки
![stell_007](https://github.com/user-attachments/assets/3cdf2b00-209f-4303-8297-26bd10bee154)
![stell_008](https://github.com/user-attachments/assets/36b91a74-202b-4803-a8f5-0012799edf32)
![stell_009](https://github.com/user-attachments/assets/80e978a0-0589-4bd3-93f7-8d58b97c885e)

7. После отрисовки сцены начинается отрисовка интерфейса
![stell_010](https://github.com/user-attachments/assets/2526536e-cc8d-4228-a557-13bd9c0cd3e2)
![stell_011](https://github.com/user-attachments/assets/b5aa89ac-64e7-4366-9d89-61675ca165ff)
![stell_012](https://github.com/user-attachments/assets/8da23e5b-78f9-449b-b1c3-3345a701484d)
