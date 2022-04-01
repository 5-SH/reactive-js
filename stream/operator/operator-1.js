/**
 * [stream? iterable?]
 * stream - readable, writable, duplex, transform
 * iterable - { value, done } 객체를 리턴하는 next() 함수를 가진 이터레이터를 
 * 리턴하는 Symbol.iterator 함수를 가진 값.
 * 
 * 이터러블은 컬렉션을 메모리 어딘가 저장해 뒀다.
 * 그리고 for...of, 전개 연사자 등 next() 를 호출해 done 이 true 일 때 까지 컬렉션을 순회한다.
 * 
 * 스트림은 메모리 전체에 읽어올 데이터를 쌓지 않고 chunk 로 바로바로 보낸다.
 * (non-flow, flow 모드)
 */

/**
 * [pub/sub 패턴? observer 패턴?]
 * pub/sub 에서 pub 은 sub 를 생각하지 않고 데이터를 push 만 하고
 * sub 는 어떤 pub 이 데이터를 보냈는지 신경쓰지 않고 데이터를 pull 해 consume 한다.
 * pub/sub 은 단방향 통신
 * 
 * observer 에서 pub 는 observer 인터페이스를 상속한 sub 를 저장할 컬렉션을 가지고 있고
 * 내부적으로 데이터를 생산한다.
 * sub 는 observer 인터페이스를 상속하고 pub 에 자신을 subscribe 한다.(pub.subscribe(sub))
 * pub 는 데이터가 생상되면 sub 에 알리기 위해 notify 함수를 실행해 
 * observer 컬렉션에 있는 sub 들의 ,observer 인터페이스에 명시된, 데이터를 소비할 함수를 호출한다.(sub.next(data))
 */