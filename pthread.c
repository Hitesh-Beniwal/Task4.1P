#include <pthread.h>
#include <cstdlib>
#include <iostream>
#include <chrono>
#include <ctime>

using namespace std;
using namespace std::chrono;

const int NUM_THREADS = 4;
unsigned long size = 100000000;
int *v1, *v2, *v3;

struct ThreadData {
    int thread_id;
    unsigned long start;
    unsigned long end;
};

void randomVector(int vector[], int size) {
    for (int i = 0; i < size; i++) {
        vector[i] = rand() % 100;
    }
}

void *vectorAdd(void *arg) {
    ThreadData *data = (ThreadData *)arg;
    for (unsigned long i = data->start; i < data->end; i++) {
        v3[i] = v1[i] + v2[i];
    }
    pthread_exit(NULL);
}

int main() {
    srand(time(0));
    v1 = (int *)malloc(size * sizeof(int));
    v2 = (int *)malloc(size * sizeof(int));
    v3 = (int *)malloc(size * sizeof(int));

    randomVector(v1, size);
    randomVector(v2, size);

    pthread_t threads[NUM_THREADS];
    ThreadData threadData[NUM_THREADS];

    unsigned long chunkSize = size / NUM_THREADS;

    auto start = high_resolution_clock::now();

    for (int i = 0; i < NUM_THREADS; i++) {
        threadData[i].thread_id = i;
        threadData[i].start = i * chunkSize;
        threadData[i].end = (i == NUM_THREADS - 1) ? size : (i + 1) * chunkSize;
        pthread_create(&threads[i], NULL, vectorAdd, (void *)&threadData[i]);
    }

    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }

    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);
    cout << "Pthread time: " << duration.count() << " microseconds" << endl;

    free(v1);
    free(v2);
    free(v3);

    return 0;
}
