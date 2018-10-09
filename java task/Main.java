package com.company;
import java.util.*;
public class Main {


    public static void main(String[] args) {
        int sum = 0;
        int[] arrlist = new int[22];
        arrlist[0]=1;
        int[] arr = {6, 2, 3, 4, 5, 5, 2, 3, 2, 2, 5, 4, 3, 3, 5, 3, 2, 6, 1, 3, 4, 2};
        for (int i=0; i<arr.length-1; i++) {

            if (arr[i]<arr[i+1]){
                //arrlist[i]=1;
                arrlist[i+1]=arrlist[i]+1;
            }
            if (arr[i]==arr[i+1]||arr[i]>arr[i+1]){
                arrlist[i+1]=1;
            }
        }

        for (int i=0; i<arrlist.length; i++){

            sum=arrlist[i]+sum;
        }

        System.out.println("Сумма стипендии при проходе вперёд: "+sum);

        System.out.print("Список стипендий: ");

        for (int i=0; i<arrlist.length; i++) System.out.print(arrlist[i]);
        System.out.println("");



        for (int i=arrlist.length-1; i>0; i--){
            if (arr[i-1]>arr[i] && arrlist[i-1]<=arrlist[i]) {

                arrlist[i-1]=arrlist[i]+1;

            }
        }

        sum=0;
        for (int i=0; i<arrlist.length; i++){

            sum=arrlist[i]+sum;
        }
        System.out.println("");
        System.out.println("Сумма стипендии при проходе назад: "+sum);
        System.out.print("Список стипендий: ");
        for (int i=0; i<arrlist.length; i++) System.out.print(arrlist[i]);
        System.out.println("");
        System.out.println("Финальная сумма: "+sum);
    }
}






